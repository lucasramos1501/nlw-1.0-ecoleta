import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsControllers {
    async index(request: Request, response: Response) {
        const { city, uf, items } = request.query;
        console.log("query:", request.query)

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        console.log({ parsedItems })

        const points = await knex('points')
            .join('points_items', 'points.id', '=', 'points_items.point_id')
            .whereIn('points_items.item_id', parsedItems)
            .where('uf', String(uf))
            .where('city', String(city))
            .distinct()
            .select('points.*')

        console.log({ points })

        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `http://192.168.0.101:3333/uploads/${point.image}`,
            }
        });
        return response.json(serializedPoints);
    };

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();
        if (!point) {
            return response.status(400).json({ message: 'Point not Found.' });
        }

        const items = await knex('items')
            .join('points_items', 'items.id', '=', 'points_items.item_id')
            .where('points_items.point_id', id)
            .select("items.title")

        const serializedPoint = {
            ...point,
            image_url: `http://192.168.0.101:3333/uploads/${point.image}`,
        }

        return response.json({ point: serializedPoint, items });
    };

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items,
            image,
        } = request.body;

        const trx = await knex.transaction();

        const point = {
            image,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }


        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0];

        const pointItems = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: number) => {
                return {
                    item_id,
                    point_id,
                }
            });

        await trx('points_items').insert(pointItems);

        trx.commit();

        return response.json({
            id: point_id,
            ...point,
        });
    }
};

export default PointsControllers;