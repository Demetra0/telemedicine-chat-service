import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

export abstract class EntityRepository<T extends Document> {
  protected constructor(protected readonly entityModel: Model<T>) {}

  async create(createEntityData: unknown): Promise<T> {
    const entity = new this.entityModel(createEntityData);
    return entity.save();
  }

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
    throwsException: boolean = false
  ): Promise<T | null> {
    return await this.entityModel.findOne(entityFilterQuery, {
      _id: 0,
      __v: 0,
      ...projection,
    })
      .then(entity => {
      if (!entity) {
        return Promise.reject(
          new NotFoundException('Model not found.')
        );
      }

      return Promise.resolve(entity ? entity : null);
    })
      .catch(error => Promise.reject(error));
  }

  async findAll(
    entityFilterQuery: FilterQuery<T>,
  ): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery);
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>
  ): Promise<T| null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true
      }
    )
  }

  async delete(
    entityFilterQuery: FilterQuery<T>
  ):Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
    return deleteResult.deletedCount >= 1;
  }
}