import { Request, Response, Router } from 'express';

const productRouter = Router();

const router = Router();

productRouter.use('/product', router);

router.get('/', (_req: Request, res: Response): void => {
  res.send('Produto API');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send(`ID do produto: ${req.params.id}`);
});

export default productRouter;
