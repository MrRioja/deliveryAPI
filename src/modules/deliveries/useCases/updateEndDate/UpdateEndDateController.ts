import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;
    const { id: id_delivery } = req.params;

    const updateDeliverymanUseCase = new UpdateEndDateUseCase();

    const delivery = await updateDeliverymanUseCase.execute({
      id_delivery,
      id_deliveryman,
    });

    return res.json(delivery);
  }
}
