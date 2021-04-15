import { ICategoryRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.finByName(name);

    if (categoryAlreadyExists) {
      throw new Error('category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
