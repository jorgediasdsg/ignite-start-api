import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importVategoryUseCase: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importVategoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
