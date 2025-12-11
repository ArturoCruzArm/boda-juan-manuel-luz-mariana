// ========================================
// GLOBAL VARIABLES
// ========================================
// NOTA: Esta lista se generará automáticamente cuando se suban las fotos
// Puedes usar el script generar_lista_fotos.py para actualizarla
const photos = [
    'images/DJI_20251122131024_0144_D.webp',
    'images/DJI_20251122131029_0145_D.webp',
    'images/DJI_20251122131045_0146_D.webp',
    'images/DJI_20251122131046_0147_D.webp',
    'images/DJI_20251122131137_0148_D.webp',
    'images/DJI_20251122171005_0169_D.webp',
    'images/DJI_20251122171007_0170_D.webp',
    'images/DSC_4415.webp',
    'images/DSC_4416.webp',
    'images/DSC_4417.webp',
    'images/DSC_4418.webp',
    'images/DSC_4419.webp',
    'images/DSC_4420.webp',
    'images/DSC_4421.webp',
    'images/DSC_4422.webp',
    'images/DSC_4423.webp',
    'images/DSC_4425.webp',
    'images/DSC_4427.webp',
    'images/DSC_4428.webp',
    'images/DSC_4429.webp',
    'images/DSC_4430.webp',
    'images/DSC_4431.webp',
    'images/DSC_4432.webp',
    'images/DSC_4433.webp',
    'images/DSC_4434.webp',
    'images/DSC_4435.webp',
    'images/DSC_4436.webp',
    'images/DSC_4437.webp',
    'images/DSC_4439.webp',
    'images/DSC_4440.webp',
    'images/DSC_4441.webp',
    'images/DSC_4442.webp',
    'images/DSC_4443.webp',
    'images/DSC_4444.webp',
    'images/DSC_4445.webp',
    'images/DSC_4446.webp',
    'images/DSC_4447.webp',
    'images/DSC_4448.webp',
    'images/DSC_4449.webp',
    'images/DSC_4450.webp',
    'images/DSC_4451.webp',
    'images/DSC_4452.webp',
    'images/DSC_4453.webp',
    'images/DSC_4454.webp',
    'images/DSC_4455.webp',
    'images/DSC_4456.webp',
    'images/DSC_4457.webp',
    'images/DSC_4458.webp',
    'images/DSC_4459.webp',
    'images/DSC_4460.webp',
    'images/DSC_4461.webp',
    'images/DSC_4462.webp',
    'images/DSC_4463.webp',
    'images/DSC_4464.webp',
    'images/DSC_4465.webp',
    'images/DSC_4466.webp',
    'images/DSC_4467.webp',
    'images/DSC_4468.webp',
    'images/DSC_4469.webp',
    'images/DSC_4470.webp',
    'images/DSC_4471.webp',
    'images/DSC_4472.webp',
    'images/DSC_4473.webp',
    'images/DSC_4474.webp',
    'images/DSC_4475.webp',
    'images/DSC_4476.webp',
    'images/DSC_4477.webp',
    'images/DSC_4478.webp',
    'images/DSC_4479.webp',
    'images/DSC_4480.webp',
    'images/DSC_4481.webp',
    'images/DSC_4482.webp',
    'images/DSC_4483.webp',
    'images/DSC_4484.webp',
    'images/DSC_4485.webp',
    'images/DSC_4486.webp',
    'images/DSC_4487.webp',
    'images/DSC_4488.webp',
    'images/DSC_4489.webp',
    'images/DSC_4490.webp',
    'images/DSC_4491.webp',
    'images/DSC_4492.webp',
    'images/DSC_4493.webp',
    'images/DSC_4494.webp',
    'images/DSC_4495.webp',
    'images/DSC_4496.webp',
    'images/DSC_4497.webp',
    'images/DSC_4498.webp',
    'images/DSC_4499.webp',
    'images/DSC_4500.webp',
    'images/DSC_4501.webp',
    'images/DSC_4502.webp',
    'images/DSC_4503.webp',
    'images/DSC_4504.webp',
    'images/DSC_4505.webp',
    'images/DSC_4506.webp',
    'images/DSC_4507.webp',
    'images/DSC_4508.webp',
    'images/DSC_4509.webp',
    'images/DSC_4510.webp',
    'images/DSC_4511.webp',
    'images/DSC_4512.webp',
    'images/DSC_4513.webp',
    'images/DSC_4514.webp',
    'images/DSC_4515.webp',
    'images/DSC_4516.webp',
    'images/DSC_4517.webp',
    'images/DSC_4518.webp',
    'images/DSC_4519.webp',
    'images/DSC_4520.webp',
    'images/DSC_4521.webp',
    'images/DSC_4522.webp',
    'images/DSC_4523.webp',
    'images/DSC_4524.webp',
    'images/DSC_4525.webp',
    'images/DSC_4526.webp',
    'images/DSC_4527.webp',
    'images/DSC_4528.webp',
    'images/DSC_4529.webp',
    'images/DSC_4530.webp',
    'images/DSC_4531.webp',
    'images/DSC_4533.webp',
    'images/DSC_4534.webp',
    'images/DSC_4535.webp',
    'images/DSC_4536.webp',
    'images/DSC_4537.webp',
    'images/DSC_4538.webp',
    'images/DSC_4542.webp',
    'images/DSC_4544.webp',
    'images/DSC_4547.webp',
    'images/DSC_4548.webp',
    'images/DSC_4549.webp',
    'images/DSC_4550.webp',
    'images/DSC_4551.webp',
    'images/DSC_4552.webp',
    'images/DSC_4553.webp',
    'images/DSC_4554.webp',
    'images/DSC_4555.webp',
    'images/DSC_4556.webp',
    'images/DSC_4557.webp',
    'images/DSC_4558.webp',
    'images/DSC_4559.webp',
    'images/DSC_4560.webp',
    'images/DSC_4561.webp',
    'images/DSC_4562.webp',
    'images/DSC_4563.webp',
    'images/DSC_4564.webp',
    'images/DSC_4565.webp',
    'images/DSC_4566.webp',
    'images/DSC_4567.webp',
    'images/DSC_4568.webp',
    'images/DSC_4569.webp',
    'images/DSC_4570.webp',
    'images/DSC_4571.webp',
    'images/DSC_4572.webp',
    'images/DSC_4573.webp',
    'images/DSC_4574.webp',
    'images/DSC_4575.webp',
    'images/DSC_4576.webp',
    'images/DSC_4577.webp',
    'images/DSC_4578.webp',
    'images/DSC_4579.webp',
    'images/DSC_4580.webp',
    'images/DSC_4581.webp',
    'images/DSC_4582.webp',
    'images/DSC_4583.webp',
    'images/DSC_4584.webp',
    'images/DSC_4585.webp',
    'images/DSC_4586.webp',
    'images/DSC_4587.webp',
    'images/DSC_4588.webp',
    'images/DSC_4589.webp',
    'images/DSC_4590.webp',
    'images/DSC_4591.webp',
    'images/DSC_4592.webp',
    'images/DSC_4593.webp',
    'images/DSC_4594.webp',
    'images/DSC_4595.webp',
    'images/DSC_4596.webp',
    'images/DSC_4597.webp',
    'images/DSC_4598.webp',
    'images/DSC_4599.webp',
    'images/DSC_4600.webp',
    'images/DSC_4601.webp',
    'images/DSC_4602.webp',
    'images/DSC_4603.webp',
    'images/DSC_4604.webp',
    'images/DSC_4605.webp',
    'images/DSC_4606.webp',
    'images/DSC_4607.webp',
    'images/DSC_4608.webp',
    'images/DSC_4609.webp',
    'images/DSC_4610.webp',
    'images/DSC_4611.webp',
    'images/DSC_4612.webp',
    'images/DSC_4613.webp',
    'images/DSC_4614.webp',
    'images/DSC_4615.webp',
    'images/DSC_4616.webp',
    'images/DSC_4617.webp',
    'images/DSC_4618.webp',
    'images/DSC_4619.webp',
    'images/DSC_4620.webp',
    'images/DSC_4621.webp',
    'images/DSC_4622.webp',
    'images/DSC_4623.webp',
    'images/DSC_4624.webp',
    'images/DSC_4625.webp',
    'images/DSC_4626.webp',
    'images/DSC_4627.webp',
    'images/DSC_4628.webp',
    'images/DSC_4629.webp',
    'images/DSC_4630.webp',
    'images/DSC_4631.webp',
    'images/DSC_4632.webp',
    'images/DSC_4633.webp',
    'images/DSC_4634.webp',
    'images/DSC_4635.webp',
    'images/DSC_4636.webp',
    'images/DSC_4637.webp',
    'images/DSC_4638.webp',
    'images/DSC_4639.webp',
    'images/DSC_4640.webp',
    'images/DSC_4641.webp',
    'images/DSC_4642.webp',
    'images/DSC_4643.webp',
    'images/DSC_4644.webp',
    'images/DSC_4645.webp',
    'images/DSC_4646.webp',
    'images/DSC_4647.webp',
    'images/DSC_4648.webp',
    'images/DSC_4649.webp',
    'images/DSC_4650.webp',
    'images/DSC_4651.webp',
    'images/DSC_4652.webp',
    'images/DSC_4653.webp',
    'images/DSC_4655.webp',
    'images/DSC_4656.webp',
    'images/DSC_4657.webp',
    'images/DSC_4658.webp',
    'images/DSC_4659.webp',
    'images/DSC_4660.webp',
    'images/DSC_4661.webp',
    'images/DSC_4662.webp',
    'images/DSC_4663.webp',
    'images/DSC_4664.webp',
    'images/DSC_4665.webp',
    'images/DSC_4666.webp',
    'images/DSC_4667.webp',
    'images/DSC_4668.webp',
    'images/DSC_4669.webp',
    'images/DSC_4670.webp',
    'images/DSC_4671.webp',
    'images/DSC_4672.webp',
    'images/DSC_4673.webp',
    'images/DSC_4674.webp',
    'images/DSC_4675.webp',
    'images/DSC_4676.webp',
    'images/DSC_4677.webp',
    'images/DSC_4678.webp',
    'images/DSC_4679.webp',
    'images/DSC_4680.webp',
    'images/DSC_4681.webp',
    'images/DSC_4682.webp',
    'images/DSC_4683.webp',
    'images/DSC_4684.webp',
    'images/DSC_4685.webp',
    'images/DSC_4686.webp',
    'images/DSC_4687.webp',
    'images/DSC_4688.webp',
    'images/DSC_4689.webp',
    'images/DSC_4690.webp',
    'images/DSC_4691.webp',
    'images/DSC_4692.webp',
    'images/DSC_4693.webp',
    'images/DSC_4694.webp',
    'images/DSC_4695.webp',
    'images/DSC_4696.webp',
    'images/DSC_4697.webp',
    'images/DSC_4698.webp',
    'images/DSC_4699.webp',
    'images/DSC_4700.webp',
    'images/DSC_4701.webp',
    'images/DSC_4702.webp',
    'images/DSC_4703.webp',
    'images/DSC_4704.webp',
    'images/DSC_4705.webp',
    'images/DSC_4706.webp',
    'images/DSC_4707.webp',
    'images/DSC_4708.webp',
    'images/DSC_4709.webp',
    'images/DSC_4710.webp',
    'images/DSC_4711.webp',
    'images/DSC_4712.webp',
    'images/DSC_4713.webp',
    'images/DSC_4714.webp',
    'images/DSC_4715.webp',
    'images/DSC_4716.webp',
    'images/DSC_4717.webp',
    'images/DSC_4718.webp',
    'images/DSC_4719.webp',
    'images/DSC_4720.webp',
    'images/DSC_4721.webp',
    'images/DSC_4722.webp',
    'images/DSC_4723.webp',
    'images/DSC_4724.webp',
    'images/DSC_4725.webp',
    'images/DSC_4726.webp',
    'images/DSC_4727.webp',
    'images/DSC_4728.webp',
    'images/DSC_4729.webp',
    'images/DSC_4730.webp',
    'images/DSC_4731.webp',
    'images/DSC_4732.webp',
    'images/DSC_4733.webp',
    'images/DSC_4734.webp',
    'images/DSC_4735.webp',
    'images/DSC_4736.webp',
    'images/DSC_4737.webp',
    'images/DSC_4738.webp',
    'images/DSC_4739.webp',
    'images/DSC_4740.webp',
    'images/DSC_4741.webp',
    'images/DSC_4742.webp',
    'images/DSC_4743.webp',
    'images/DSC_4744.webp',
    'images/DSC_4745.webp',
    'images/DSC_4746.webp',
    'images/DSC_4747.webp',
    'images/DSC_4748.webp',
    'images/DSC_4749.webp',
    'images/DSC_4750.webp',
    'images/DSC_4751.webp',
    'images/DSC_4752.webp',
    'images/DSC_4753.webp',
    'images/DSC_4754.webp',
    'images/DSC_4755.webp',
    'images/DSC_4756.webp',
    'images/DSC_4757.webp',
    'images/DSC_4758.webp',
    'images/DSC_4759.webp',
    'images/DSC_4760.webp',
    'images/DSC_4761.webp',
    'images/DSC_4762.webp',
    'images/DSC_4763.webp',
    'images/DSC_4764.webp',
    'images/DSC_4765.webp',
    'images/DSC_4766.webp',
    'images/DSC_4767.webp',
    'images/DSC_4768.webp',
    'images/DSC_4769.webp',
    'images/DSC_4770.webp',
    'images/DSC_4771.webp',
    'images/DSC_4772.webp',
    'images/DSC_4773.webp',
    'images/DSC_4774.webp',
    'images/DSC_4775.webp',
    'images/DSC_4776.webp',
    'images/DSC_4777.webp',
    'images/DSC_4778.webp',
    'images/DSC_4779.webp',
    'images/DSC_4780.webp',
    'images/DSC_4781.webp',
    'images/DSC_4782.webp',
    'images/DSC_4783.webp',
    'images/DSC_4784.webp',
    'images/DSC_4785.webp',
    'images/DSC_4786.webp',
    'images/DSC_4787.webp',
    'images/DSC_4788.webp',
    'images/DSC_4789.webp',
    'images/DSC_4790.webp',
    'images/DSC_4791.webp',
    'images/DSC_4792.webp',
    'images/DSC_4793.webp',
    'images/DSC_4794.webp',
    'images/DSC_4795.webp',
    'images/DSC_4796.webp',
    'images/DSC_4797.webp',
    'images/DSC_4798.webp',
    'images/DSC_4799.webp',
    'images/DSC_4800.webp',
    'images/DSC_4801.webp',
    'images/DSC_4802.webp',
    'images/DSC_4803.webp',
    'images/DSC_4804.webp',
    'images/DSC_4805.webp',
    'images/DSC_4806.webp',
    'images/DSC_4807.webp',
    'images/DSC_4808.webp',
    'images/DSC_4809.webp',
    'images/DSC_4810.webp',
    'images/DSC_4811.webp',
    'images/DSC_4812.webp',
    'images/DSC_4813.webp',
    'images/DSC_4814.webp',
    'images/DSC_4815.webp',
    'images/DSC_4816.webp',
    'images/DSC_4817.webp',
    'images/DSC_4818.webp',
    'images/DSC_4819.webp',
    'images/DSC_4820.webp',
    'images/DSC_4821.webp',
    'images/DSC_4822.webp',
    'images/DSC_4823.webp',
    'images/DSC_4824.webp',
    'images/DSC_4825.webp',
    'images/DSC_4826.webp',
    'images/DSC_4827.webp',
    'images/DSC_4828.webp',
    'images/DSC_4829.webp',
    'images/DSC_4830.webp',
    'images/DSC_4831.webp',
    'images/DSC_4832.webp',
    'images/DSC_4833.webp',
    'images/DSC_4834.webp',
    'images/DSC_4835.webp',
    'images/DSC_4836.webp',
    'images/DSC_4837.webp',
    'images/DSC_4838.webp',
    'images/DSC_4839.webp',
    'images/DSC_4840.webp',
    'images/DSC_4841.webp',
    'images/DSC_4842.webp',
    'images/DSC_4843.webp',
    'images/DSC_4844.webp',
    'images/DSC_4845.webp',
    'images/DSC_4846.webp',
    'images/DSC_4847.webp',
    'images/DSC_4848.webp',
    'images/DSC_4849.webp',
    'images/DSC_4850.webp',
    'images/DSC_4851.webp',
    'images/DSC_4852.webp',
    'images/DSC_4853.webp',
    'images/DSC_4854.webp',
    'images/DSC_4855.webp',
    'images/DSC_4856.webp',
    'images/DSC_4857.webp',
    'images/DSC_4858.webp',
    'images/DSC_4859.webp',
    'images/DSC_4860.webp',
    'images/DSC_4861.webp',
    'images/DSC_4862.webp',
    'images/DSC_4863.webp',
    'images/DSC_4864.webp',
    'images/DSC_4865.webp',
    'images/DSC_4866.webp',
    'images/DSC_4867.webp',
    'images/DSC_4868.webp',
    'images/DSC_4869.webp',
    'images/DSC_4870.webp',
    'images/DSC_4871.webp',
    'images/DSC_4872.webp',
    'images/DSC_4873.webp',
    'images/DSC_4874.webp',
    'images/DSC_4875.webp',
    'images/DSC_4876.webp',
    'images/DSC_4877.webp',
    'images/DSC_4878.webp',
    'images/DSC_4879.webp',
    'images/DSC_4880.webp',
    'images/DSC_4881.webp',
    'images/DSC_4882.webp',
    'images/DSC_4883.webp',
    'images/DSC_4884.webp',
    'images/DSC_4885.webp',
    'images/DSC_4886.webp',
    'images/DSC_4887.webp',
    'images/DSC_4888.webp',
    'images/DSC_4889.webp',
    'images/DSC_4890.webp',
    'images/DSC_4891.webp',
    'images/DSC_4892.webp',
    'images/DSC_4893.webp',
    'images/DSC_4894.webp',
    'images/DSC_4895.webp',
    'images/DSC_4896.webp',
    'images/DSC_4897.webp',
    'images/DSC_4898.webp',
    'images/DSC_4899.webp',
    'images/DSC_4900.webp',
    'images/DSC_4901.webp',
    'images/DSC_4902.webp',
    'images/DSC_4903.webp',
    'images/DSC_4904.webp',
    'images/DSC_4905.webp',
    'images/DSC_4906.webp',
    'images/DSC_4907.webp',
    'images/DSC_4908.webp',
    'images/DSC_4909.webp',
    'images/DSC_4910.webp',
    'images/DSC_4911.webp',
    'images/DSC_4912.webp',
    'images/DSC_4913.webp',
    'images/DSC_4914.webp',
    'images/DSC_4915.webp',
    'images/DSC_4916.webp',
    'images/DSC_4917.webp',
    'images/DSC_4918.webp',
    'images/DSC_4919.webp',
    'images/DSC_4920.webp',
    'images/DSC_4921.webp',
    'images/DSC_4922.webp',
    'images/DSC_4923.webp',
    'images/DSC_4924.webp',
    'images/DSC_4925.webp',
    'images/DSC_4926.webp',
    'images/DSC_4927.webp',
    'images/DSC_4928.webp',
    'images/DSC_4929.webp',
    'images/DSC_4930.webp',
    'images/DSC_4931.webp',
    'images/DSC_4932.webp',
    'images/DSC_4933.webp',
    'images/DSC_4934.webp',
    'images/DSC_4935.webp',
    'images/DSC_4936.webp',
    'images/DSC_4937.webp',
    'images/DSC_4938.webp',
    'images/DSC_4939.webp',
    'images/DSC_4940.webp',
    'images/DSC_4941.webp',
    'images/DSC_4942.webp',
    'images/DSC_4943.webp',
    'images/DSC_4944.webp',
    'images/DSC_4945.webp',
    'images/DSC_4946.webp',
    'images/DSC_4947.webp',
    'images/DSC_4948.webp',
    'images/DSC_4949.webp',
    'images/DSC_4950.webp',
    'images/DSC_4951.webp',
    'images/DSC_4952.webp',
    'images/DSC_4953.webp',
    'images/DSC_4954.webp',
    'images/DSC_4955.webp',
    'images/DSC_4956.webp',
    'images/DSC_4957.webp',
    'images/DSC_4958.webp',
    'images/DSC_4959.webp',
    'images/DSC_4960.webp',
    'images/DSC_4961.webp',
    'images/DSC_4962.webp',
    'images/DSC_4963.webp',
    'images/DSC_4964.webp',
    'images/DSC_4965.webp',
    'images/DSC_4966.webp',
    'images/DSC_4967.webp',
    'images/DSC_4968.webp',
    'images/DSC_4969.webp',
    'images/DSC_4970.webp',
    'images/DSC_4971.webp',
    'images/DSC_4972.webp',
    'images/DSC_4973.webp',
    'images/DSC_4974.webp',
    'images/DSC_4975.webp',
    'images/DSC_4976.webp',
    'images/DSC_4977.webp',
    'images/DSC_4978.webp',
    'images/DSC_4979.webp',
    'images/DSC_4980.webp',
    'images/DSC_4981.webp',
    'images/DSC_4982.webp',
    'images/DSC_4983.webp',
    'images/DSC_4984.webp',
    'images/DSC_4985.webp',
    'images/DSC_4986.webp',
    'images/DSC_4987.webp',
    'images/DSC_4988.webp',
    'images/DSC_4989.webp',
    'images/DSC_4990.webp',
    'images/DSC_4991.webp',
    'images/DSC_4992.webp',
    'images/DSC_4993.webp',
    'images/DSC_4994.webp',
    'images/DSC_4995.webp',
    'images/DSC_4996.webp',
    'images/DSC_4997.webp',
    'images/DSC_4998.webp',
    'images/DSC_4999.webp',
    'images/DSC_5000.webp',
    'images/DSC_5001.webp',
    'images/DSC_5002.webp',
    'images/DSC_5003.webp',
    'images/DSC_5004.webp',
    'images/DSC_5005.webp',
    'images/DSC_5006.webp',
    'images/DSC_5007.webp',
    'images/DSC_5008.webp',
    'images/DSC_5009.webp',
    'images/DSC_5010.webp',
    'images/DSC_5011.webp',
    'images/DSC_5012.webp',
    'images/DSC_5013.webp',
    'images/DSC_5014.webp',
    'images/DSC_5015.webp',
    'images/DSC_5016.webp',
    'images/DSC_5017.webp',
    'images/DSC_5018.webp',
    'images/DSC_5019.webp',
    'images/DSC_5020.webp',
    'images/DSC_5021.webp',
    'images/DSC_5022.webp',
    'images/DSC_5023.webp',
    'images/DSC_5024.webp',
    'images/DSC_5025.webp',
    'images/DSC_5026.webp',
    'images/DSC_5027.webp',
    'images/DSC_5028.webp',
    'images/DSC_5029.webp',
    'images/DSC_5030.webp',
    'images/DSC_5031.webp',
    'images/DSC_5032.webp',
    'images/DSC_5033.webp',
    'images/DSC_5034.webp',
    'images/DSC_5035.webp',
    'images/DSC_5036.webp',
    'images/DSC_5037.webp',
    'images/DSC_5038.webp',
    'images/DSC_5039.webp',
    'images/DSC_5040.webp',
    'images/DSC_5041.webp',
    'images/DSC_5042.webp',
    'images/DSC_5043.webp',
    'images/DSC_5044.webp',
    'images/DSC_5045.webp',
    'images/DSC_5046.webp',
    'images/DSC_5047.webp',
    'images/DSC_5048.webp',
    'images/DSC_5049.webp',
    'images/DSC_5050.webp',
    'images/DSC_5051.webp',
    'images/DSC_5052.webp',
    'images/DSC_5053.webp',
    'images/DSC_5054.webp',
    'images/DSC_5055.webp',
    'images/DSC_5056.webp',
    'images/DSC_5057.webp',
    'images/DSC_5058.webp',
    'images/DSC_5059.webp',
    'images/DSC_5060.webp',
    'images/DSC_5061.webp',
    'images/DSC_5062.webp',
    'images/DSC_5063.webp',
    'images/DSC_5064.webp',
    'images/DSC_5065.webp',
    'images/DSC_5066.webp',
    'images/DSC_5067.webp',
    'images/DSC_5068.webp',
    'images/DSC_5069.webp',
    'images/DSC_5070.webp',
    'images/DSC_5071.webp',
    'images/DSC_5072.webp',
    'images/DSC_5073.webp',
    'images/DSC_5074.webp',
    'images/DSC_5075.webp',
    'images/DSC_5076.webp',
    'images/DSC_5077.webp',
    'images/DSC_5078.webp',
    'images/DSC_5079.webp',
    'images/DSC_5080.webp',
    'images/DSC_5081.webp',
    'images/DSC_5082.webp',
    'images/DSC_5083.webp',
    'images/DSC_5084.webp',
    'images/DSC_5085.webp',
    'images/DSC_5086.webp',
    'images/DSC_5087.webp',
    'images/DSC_5088.webp',
    'images/DSC_5089.webp',
    'images/DSC_5090.webp',
    'images/DSC_5091.webp',
    'images/DSC_5092.webp',
    'images/DSC_5093.webp',
    'images/DSC_5094.webp',
    'images/DSC_5095.webp',
    'images/DSC_5096.webp',
    'images/DSC_5097.webp',
    'images/DSC_5098.webp',
    'images/DSC_5099.webp',
    'images/DSC_5100.webp',
    'images/DSC_5101.webp',
    'images/DSC_5102.webp',
    'images/DSC_5103.webp',
    'images/DSC_5104.webp',
    'images/DSC_5105.webp',
    'images/DSC_5106.webp',
    'images/DSC_5107.webp',
    'images/DSC_5108.webp',
    'images/DSC_5109.webp',
    'images/DSC_5110.webp',
    'images/DSC_5111.webp',
    'images/DSC_5112.webp',
    'images/DSC_5113.webp',
    'images/DSC_5114.webp',
    'images/DSC_5115.webp',
    'images/DSC_5116.webp',
    'images/DSC_5117.webp',
    'images/DSC_5118.webp',
    'images/DSC_5119.webp',
    'images/DSC_5120.webp',
    'images/DSC_5121.webp',
    'images/DSC_5122.webp',
    'images/DSC_5123.webp',
    'images/DSC_5124.webp',
    'images/DSC_5125.webp',
    'images/DSC_5126.webp',
    'images/DSC_5127.webp',
    'images/DSC_5128.webp',
    'images/DSC_5129.webp',
    'images/DSC_5130.webp',
    'images/DSC_5131.webp',
    'images/DSC_5132.webp',
    'images/DSC_5133.webp',
    'images/DSC_5134.webp',
    'images/DSC_5135.webp',
    'images/DSC_5136.webp',
    'images/DSC_5137.webp',
    'images/DSC_5138.webp',
    'images/DSC_5139.webp',
    'images/DSC_5140.webp',
    'images/DSC_5141.webp',
    'images/DSC_5142.webp',
    'images/DSC_5143.webp',
    'images/DSC_5144.webp',
    'images/DSC_5145.webp',
    'images/DSC_5146.webp',
    'images/DSC_5147.webp',
    'images/DSC_5148.webp',
    'images/DSC_5149.webp',
    'images/DSC_5150.webp',
    'images/DSC_5151.webp',
    'images/DSC_5152.webp',
    'images/DSC_5153.webp',
    'images/DSC_5154.webp',
    'images/DSC_5155.webp',
    'images/DSC_5156.webp',
    'images/DSC_5157.webp',
    'images/DSC_5158.webp',
    'images/DSC_5159.webp',
    'images/DSC_5160.webp',
    'images/DSC_5161.webp',
    'images/DSC_5162.webp',
    'images/DSC_5163.webp',
    'images/DSC_5164.webp',
    'images/DSC_5165.webp',
    'images/DSC_5166.webp',
    'images/DSC_5167.webp',
    'images/DSC_5168.webp',
    'images/DSC_5169.webp',
    'images/DSC_5170.webp',
    'images/DSC_5171.webp',
    'images/DSC_5172.webp',
    'images/DSC_5173.webp',
    'images/DSC_5174.webp',
    'images/DSC_5175.webp',
    'images/DSC_5176.webp',
    'images/DSC_5177.webp',
    'images/DSC_5178.webp',
    'images/DSC_5179.webp',
    'images/DSC_5180.webp',
    'images/DSC_5181.webp',
    'images/DSC_5182.webp',
    'images/DSC_5183.webp',
    'images/DSC_5184.webp',
    'images/DSC_5185.webp',
    'images/DSC_5186.webp',
    'images/DSC_5187.webp',
    'images/DSC_5188.webp',
    'images/DSC_5189.webp',
    'images/DSC_5190.webp',
    'images/DSC_5191.webp',
    'images/DSC_5192.webp',
    'images/DSC_5193.webp',
    'images/DSC_5194.webp',
    'images/DSC_5195.webp',
    'images/DSC_5196.webp',
    'images/DSC_5197.webp',
    'images/DSC_5198.webp',
    'images/DSC_5199.webp',
    'images/DSC_5200.webp',
    'images/DSC_5201.webp',
    'images/DSC_5202.webp',
    'images/DSC_5203.webp',
    'images/DSC_5204.webp',
    'images/DSC_5205.webp',
    'images/DSC_5206.webp',
    'images/DSC_5207.webp',
    'images/DSC_5208.webp',
    'images/DSC_5209.webp',
    'images/DSC_5210.webp',
    'images/DSC_5211.webp',
    'images/DSC_5212.webp',
    'images/DSC_5213.webp',
    'images/DSC_5214.webp',
    'images/DSC_5215.webp',
    'images/DSC_5216.webp',
    'images/DSC_5217.webp',
    'images/DSC_5218.webp',
    'images/DSC_5219.webp',
    'images/DSC_5220.webp',
    'images/DSC_5221.webp',
    'images/DSC_5222.webp',
    'images/DSC_5223.webp',
    'images/DSC_5224.webp',
    'images/DSC_5225.webp',
    'images/DSC_5226.webp',
    'images/DSC_5227.webp',
    'images/DSC_5228.webp',
    'images/DSC_5229.webp',
    'images/DSC_5230.webp',
    'images/DSC_5231.webp',
    'images/DSC_5232.webp',
    'images/DSC_5233.webp',
    'images/DSC_5234.webp',
    'images/DSC_5235.webp',
    'images/DSC_5236.webp',
    'images/DSC_5237.webp',
    'images/DSC_5238.webp',
    'images/DSC_5239.webp',
    'images/DSC_5240.webp',
    'images/DSC_5241.webp',
    'images/DSC_5242.webp',
    'images/DSC_5243.webp',
    'images/DSC_5244.webp',
    'images/DSC_5245.webp',
    'images/DSC_5246.webp',
    'images/DSC_5247.webp',
    'images/DSC_5248.webp',
    'images/DSC_5249.webp',
    'images/DSC_5250.webp',
    'images/DSC_5251.webp',
    'images/DSC_5252.webp',
    'images/DSC_5253.webp',
    'images/DSC_5254.webp',
    'images/DSC_5255.webp',
    'images/DSC_5256.webp',
    'images/DSC_5257.webp',
    'images/DSC_5258.webp',
    'images/DSC_5259.webp',
    'images/DSC_5260.webp',
    'images/DSC_5261.webp',
    'images/DSC_5262.webp',
    'images/DSC_5263.webp',
    'images/DSC_5264.webp',
    'images/DSC_5265.webp',
    'images/DSC_5266.webp',
    'images/DSC_5267.webp',
    'images/DSC_5268.webp',
    'images/DSC_5269.webp',
    'images/DSC_5270.webp',
    'images/DSC_5271.webp',
    'images/DSC_5272.webp',
    'images/DSC_5273.webp',
    'images/DSC_5274.webp',
    'images/DSC_5275.webp',
    'images/DSC_5276.webp',
    'images/DSC_5277.webp',
    'images/DSC_5278.webp',
    'images/DSC_5279.webp',
    'images/DSC_5280.webp',
    'images/DSC_5281.webp',
    'images/DSC_5282.webp',
    'images/DSC_5283.webp',
    'images/DSC_5284.webp',
    'images/DSC_5285.webp',
    'images/DSC_5286.webp',
    'images/DSC_5287.webp',
    'images/DSC_5288.webp',
    'images/DSC_5289.webp',
    'images/DSC_5290.webp',
    'images/DSC_5291.webp',
    'images/DSC_5292.webp',
    'images/DSC_5293.webp',
    'images/DSC_5294.webp',
    'images/DSC_5295.webp',
    'images/DSC_5296.webp',
    'images/DSC_5297.webp',
    'images/DSC_5298.webp',
    'images/DSC_5299.webp',
    'images/DSC_5300.webp',
    'images/DSC_5301.webp',
    'images/DSC_5302.webp',
    'images/DSC_5303.webp',
    'images/DSC_5304.webp',
    'images/DSC_5305.webp',
    'images/DSC_5306.webp',
    'images/DSC_5307.webp',
    'images/DSC_5308.webp',
    'images/DSC_5309.webp',
    'images/DSC_5310.webp',
    'images/DSC_5311.webp',
    'images/DSC_5312.webp',
    'images/DSC_5313.webp',
    'images/DSC_5314.webp',
    'images/DSC_5315.webp',
    'images/DSC_5316.webp',
    'images/DSC_5317.webp',
    'images/DSC_5318.webp',
    'images/DSC_5319.webp',
    'images/DSC_5320.webp',
    'images/DSC_5321.webp',
    'images/DSC_5322.webp',
    'images/DSC_5323.webp',
    'images/DSC_5324.webp',
    'images/DSC_5325.webp',
    'images/DSC_5326.webp',
    'images/DSC_5327.webp',
    'images/DSC_5328.webp',
    'images/DSC_5329.webp',
    'images/DSC_5330.webp',
    'images/DSC_5331.webp',
    'images/DSC_5332.webp',
    'images/DSC_5333.webp',
    'images/DSC_5334.webp',
    'images/DSC_5335.webp',
    'images/DSC_5336.webp',
    'images/DSC_5337.webp',
    'images/DSC_5338.webp',
    'images/DSC_5339.webp',
    'images/DSC_5340.webp',
    'images/DSC_5341.webp',
    'images/DSC_5342.webp',
    'images/DSC_5343.webp',
    'images/DSC_5344.webp',
    'images/DSC_5345.webp',
    'images/DSC_5346.webp',
    'images/DSC_5347.webp',
    'images/DSC_5348.webp',
    'images/DSC_5349.webp',
    'images/DSC_5350.webp',
    'images/DSC_5351.webp',
    'images/DSC_5352.webp',
    'images/DSC_5353.webp',
    'images/DSC_5354.webp',
    'images/DSC_5355.webp',
    'images/DSC_5356.webp',
    'images/DSC_5357.webp',
    'images/DSC_5358.webp',
    'images/DSC_5359.webp',
    'images/DSC_5360.webp',
    'images/DSC_5361.webp',
    'images/DSC_5362.webp',
    'images/DSC_5363.webp',
    'images/DSC_5364.webp',
    'images/DSC_5365.webp',
    'images/DSC_5366.webp',
    'images/DSC_5367.webp',
    'images/DSC_5368.webp',
    'images/DSC_5369.webp',
    'images/DSC_5370.webp',
    'images/DSC_5371.webp',
    'images/DSC_5372.webp',
    'images/DSC_5373.webp',
    'images/DSC_5374.webp',
    'images/IMG_4707.webp',
    'images/IMG_4708.webp',
    'images/IMG_4710.webp',
    'images/IMG_4711.webp',
    'images/IMG_4712.webp',
    'images/IMG_4718.webp',
    'images/IMG_4719.webp',
    'images/IMG_4720.webp',
    'images/IMG_4721.webp',
    'images/IMG_4722.webp',
    'images/IMG_4723.webp',
    'images/IMG_4737.webp',
    'images/IMG_4738.webp',
    'images/IMG_4739.webp',
    'images/IMG_4744.webp',
    'images/IMG_4745.webp',
    'images/IMG_4746.webp',
    'images/IMG_4747.webp',
    'images/IMG_4749.webp',
    'images/IMG_4750.webp',
    'images/IMG_4753.webp',
    'images/IMG_4754.webp',
    'images/IMG_4755.webp',
    'images/IMG_4756.webp',
    'images/IMG_4757.webp',
    'images/IMG_4758.webp',
    'images/IMG_4759.webp',
    'images/IMG_4761.webp',
    'images/IMG_4762.webp',
    'images/IMG_4763.webp',
    'images/IMG_4765.webp',
    'images/IMG_4766.webp',
    'images/IMG_4767.webp',
    'images/IMG_4768.webp',
    'images/IMG_4769.webp',
    'images/IMG_4770.webp',
    'images/IMG_4771.webp',
    'images/IMG_4772.webp',
    'images/IMG_4773.webp',
    'images/IMG_4774.webp',
    'images/IMG_4775.webp',
    'images/IMG_4776.webp',
    'images/IMG_4777.webp',
    'images/IMG_4778.webp',
    'images/IMG_4779.webp',
    'images/IMG_4780.webp',
    'images/IMG_4781.webp',
    'images/IMG_4782.webp',
    'images/IMG_4783.webp',
    'images/IMG_4784.webp',
    'images/IMG_4785.webp',
    'images/IMG_4786.webp',
    'images/IMG_4787.webp',
    'images/IMG_4788.webp',
    'images/IMG_4789.webp',
    'images/IMG_4790.webp',
    'images/IMG_4791.webp',
    'images/IMG_4792.webp',
    'images/IMG_4793.webp',
    'images/IMG_4794.webp',
    'images/IMG_4795.webp',
    'images/IMG_4796.webp',
    'images/IMG_4797.webp',
    'images/IMG_4798.webp',
    'images/IMG_4799.webp',
    'images/IMG_4800.webp',
    'images/IMG_4801.webp',
    'images/IMG_4802.webp',
    'images/IMG_4803.webp',
    'images/IMG_4804.webp',
    'images/IMG_4805.webp',
    'images/IMG_4806.webp',
    'images/IMG_4807.webp',
    'images/IMG_4808.webp',
    'images/IMG_4809.webp',
    'images/IMG_4810.webp',
    'images/IMG_4811.webp',
    'images/IMG_4812.webp',
    'images/IMG_4813.webp',
    'images/IMG_4814.webp',
    'images/IMG_4815.webp',
    'images/IMG_4816.webp',
    'images/IMG_4817.webp',
    'images/IMG_4818.webp',
    'images/IMG_4819.webp',
    'images/IMG_4820.webp',
    'images/IMG_4821.webp',
    'images/IMG_4822.webp',
    'images/IMG_4823.webp',
    'images/IMG_4824.webp',
    'images/IMG_4825.webp',
    'images/IMG_4826.webp',
    'images/IMG_4827.webp',
    'images/IMG_4828.webp',
    'images/IMG_4829.webp',
    'images/IMG_4830.webp',
    'images/IMG_4831.webp',
    'images/IMG_4832.webp',
    'images/IMG_4833.webp',
    'images/IMG_4834.webp',
    'images/IMG_4835.webp',
    'images/IMG_4836.webp',
    'images/IMG_4837.webp',
    'images/IMG_4838.webp',
    'images/IMG_4839.webp',
    'images/IMG_4840.webp',
    'images/IMG_4841.webp',
    'images/IMG_4842.webp',
    'images/IMG_4843.webp',
    'images/IMG_4844.webp',
    'images/IMG_4845.webp',
    'images/IMG_4846.webp',
    'images/IMG_4847.webp',
    'images/IMG_4848.webp',
    'images/IMG_4849.webp',
    'images/IMG_4850.webp',
    'images/IMG_4851.webp',
    'images/IMG_4852.webp',
    'images/IMG_4853.webp',
    'images/IMG_4854.webp',
    'images/IMG_4855.webp',
    'images/IMG_4856.webp',
    'images/IMG_4857.webp',
    'images/IMG_4858.webp',
    'images/IMG_4859.webp',
    'images/IMG_4860.webp',
    'images/IMG_4861.webp',
    'images/IMG_4862.webp',
    'images/IMG_4863.webp',
    'images/IMG_4864.webp',
    'images/IMG_4865.webp',
    'images/IMG_4866.webp',
    'images/IMG_4867.webp',
    'images/IMG_4868.webp',
    'images/IMG_4869.webp',
    'images/IMG_4870.webp',
    'images/IMG_4871.webp',
    'images/IMG_4872.webp',
    'images/IMG_4873.webp',
    'images/IMG_4874.webp',
    'images/IMG_4875.webp',
    'images/IMG_4876.webp',
    'images/IMG_4877.webp',
    'images/IMG_4878.webp',
    'images/IMG_4879.webp',
    'images/IMG_4880.webp',
    'images/IMG_4881.webp',
    'images/IMG_4882.webp',
    'images/IMG_4883.webp',
    'images/IMG_4884.webp',
    'images/IMG_4885.webp',
    'images/IMG_4886.webp',
    'images/IMG_4887.webp',
    'images/IMG_4888.webp',
    'images/IMG_4889.webp',
    'images/IMG_4890.webp',
    'images/IMG_4891.webp',
    'images/IMG_4892.webp',
    'images/IMG_4893.webp',
    'images/IMG_4894.webp',
    'images/IMG_4895.webp',
    'images/IMG_4896.webp',
    'images/IMG_4897.webp',
    'images/IMG_4898.webp',
    'images/IMG_4899.webp',
    'images/IMG_4900.webp',
    'images/IMG_4901.webp',
    'images/IMG_4902.webp',
    'images/IMG_4903.webp',
    'images/IMG_4904.webp',
    'images/IMG_4905.webp',
    'images/IMG_4906.webp',
    'images/IMG_4907.webp',
    'images/IMG_4908.webp',
    'images/IMG_4909.webp',
    'images/IMG_4910.webp',
    'images/IMG_4911.webp',
    'images/IMG_4912.webp',
    'images/IMG_4913.webp',
    'images/IMG_4914.webp',
    'images/IMG_4915.webp',
    'images/IMG_4916.webp',
    'images/IMG_4917.webp',
    'images/IMG_4918.webp',
    'images/IMG_4919.webp',
    'images/IMG_4920.webp',
    'images/IMG_4921.webp',
    'images/IMG_4922.webp',
    'images/IMG_4923.webp',
    'images/IMG_4924.webp',
    'images/IMG_4925.webp',
    'images/IMG_4926.webp',
    'images/IMG_4927.webp',
    'images/IMG_4928.webp',
    'images/IMG_4929.webp',
    'images/IMG_4930.webp',
    'images/IMG_4931.webp',
    'images/IMG_4932.webp',
    'images/IMG_4933.webp',
    'images/IMG_4934.webp',
    'images/IMG_4935.webp',
    'images/IMG_4936.webp',
    'images/IMG_4937.webp',
    'images/IMG_4938.webp',
    'images/IMG_4939.webp',
    'images/IMG_4940.webp',
    'images/IMG_4941.webp',
    'images/IMG_4942.webp',
    'images/IMG_4943.webp',
    'images/IMG_4944.webp',
    'images/IMG_4945.webp',
    'images/IMG_4946.webp',
    'images/IMG_4947.webp',
    'images/IMG_4948.webp',
    'images/IMG_4949.webp',
    'images/IMG_4950.webp',
    'images/IMG_4951.webp',
    'images/IMG_4952.webp',
    'images/IMG_4953.webp',
    'images/IMG_4954.webp',
    'images/IMG_4955.webp',
    'images/IMG_4956.webp',
    'images/IMG_4957.webp',
    'images/IMG_4958.webp',
    'images/IMG_4960.webp',
    'images/IMG_4961.webp',
    'images/IMG_4962.webp',
    'images/IMG_4963.webp',
    'images/IMG_4964.webp',
    'images/IMG_4965.webp',
    'images/IMG_4966.webp',
    'images/IMG_4967.webp',
    'images/IMG_4968.webp',
    'images/IMG_4969.webp',
    'images/IMG_4970.webp',
    'images/IMG_4971.webp',
    'images/IMG_4972.webp',
    'images/IMG_4973.webp',
    'images/IMG_4974.webp',
    'images/IMG_4975.webp',
    'images/IMG_4976.webp',
    'images/IMG_4977.webp',
    'images/IMG_4978.webp',
    'images/IMG_4979.webp',
    'images/IMG_4980.webp',
    'images/IMG_4981.webp',
    'images/IMG_4983.webp',
    'images/IMG_4984.webp',
    'images/IMG_4985.webp',
    'images/IMG_4986.webp',
    'images/IMG_4987.webp',
    'images/IMG_4988.webp',
    'images/IMG_4989.webp',
    'images/IMG_4990.webp',
    'images/IMG_4991.webp',
    'images/IMG_4992.webp',
    'images/IMG_4993.webp',
    'images/IMG_4994.webp',
    'images/IMG_4995.webp',
    'images/IMG_4996.webp',
    'images/IMG_4997.webp',
    'images/IMG_4998.webp',
    'images/IMG_4999.webp',
    'images/IMG_5001.webp',
    'images/IMG_5002.webp',
    'images/IMG_5003.webp',
    'images/IMG_5004.webp',
    'images/IMG_5005.webp',
    'images/IMG_5006.webp',
    'images/IMG_5007.webp',
    'images/IMG_5008.webp',
    'images/IMG_5009.webp',
    'images/IMG_5010.webp',
    'images/IMG_5011.webp',
    'images/IMG_5012.webp',
    'images/IMG_5013.webp',
    'images/IMG_5014.webp',
    'images/IMG_5015.webp',
    'images/IMG_5016.webp',
    'images/IMG_5017.webp',
    'images/IMG_5018.webp',
    'images/IMG_5019.webp',
    'images/IMG_5020.webp',
    'images/IMG_5021.webp',
    'images/IMG_5022.webp',
    'images/IMG_5023.webp',
    'images/IMG_5024.webp',
    'images/IMG_5025.webp',
    'images/IMG_5026.webp',
    'images/IMG_5027.webp',
    'images/IMG_5029.webp',
    'images/IMG_5030.webp',
    'images/IMG_5031.webp',
    'images/IMG_5032.webp',
    'images/IMG_5033.webp',
    'images/IMG_5034.webp',
    'images/IMG_5035.webp',
    'images/IMG_5036.webp',
    'images/IMG_5037.webp',
    'images/IMG_5038.webp',
    'images/IMG_5039.webp',
    'images/IMG_5040.webp',
    'images/IMG_5041.webp',
    'images/IMG_5042.webp',
    'images/IMG_5043.webp',
    'images/IMG_5044.webp',
    'images/IMG_5045.webp',
    'images/IMG_5046.webp',
    'images/IMG_5047.webp',
    'images/IMG_5048.webp',
    'images/IMG_5049.webp',
    'images/IMG_5050.webp',
    'images/IMG_5051.webp',
    'images/IMG_5052.webp',
    'images/IMG_5053.webp',
    'images/IMG_5054.webp',
    'images/IMG_5055.webp',
    'images/IMG_5056.webp',
    'images/IMG_5057.webp',
    'images/IMG_5058.webp',
    'images/IMG_5059.webp',
    'images/IMG_5060.webp',
    'images/IMG_5061.webp',
    'images/IMG_5062.webp',
    'images/IMG_5063.webp',
    'images/IMG_5064.webp',
    'images/IMG_5065.webp',
    'images/IMG_5066.webp',
    'images/IMG_5067.webp',
    'images/IMG_5068.webp',
    'images/IMG_5069.webp',
    'images/IMG_5070.webp',
    'images/IMG_5071.webp',
    'images/IMG_5072.webp',
    'images/IMG_5073.webp',
    'images/IMG_5074.webp',
    'images/IMG_5075.webp',
    'images/IMG_5076.webp',
    'images/IMG_5077.webp',
    'images/IMG_5078.webp',
    'images/IMG_5079.webp',
    'images/IMG_5080.webp',
    'images/IMG_5081.webp',
    'images/IMG_5082.webp',
    'images/IMG_5083.webp',
    'images/IMG_5084.webp',
    'images/IMG_5085.webp',
    'images/IMG_5086.webp',
    'images/IMG_5087.webp',
    'images/IMG_5088.webp',
    'images/IMG_5089.webp',
    'images/IMG_5090.webp',
    'images/IMG_5091.webp',
    'images/IMG_5092.webp',
    'images/IMG_5093.webp',
    'images/IMG_5094.webp',
    'images/IMG_5095.webp',
    'images/IMG_5096.webp',
    'images/IMG_5097.webp',
    'images/IMG_5098.webp',
    'images/IMG_5099.webp',
    'images/IMG_5100.webp',
    'images/IMG_5101.webp',
    'images/IMG_5102.webp',
    'images/IMG_5103.webp',
    'images/IMG_5104.webp',
    'images/IMG_5105.webp',
    'images/IMG_5106.webp',
    'images/IMG_5107.webp',
    'images/IMG_5108.webp',
    'images/IMG_5109.webp',
    'images/IMG_5110.webp',
    'images/IMG_5111.webp',
    'images/IMG_5112.webp',
    'images/IMG_5113.webp',
    'images/IMG_5114.webp',
    'images/IMG_5115.webp',
    'images/IMG_5116.webp',
    'images/IMG_5117.webp',
    'images/IMG_5118.webp',
    'images/IMG_5119.webp',
    'images/IMG_5120.webp',
    'images/IMG_5121.webp',
    'images/IMG_5122.webp',
    'images/IMG_5123.webp',
    'images/IMG_5124.webp',
    'images/IMG_5126.webp',
    'images/IMG_5127.webp',
    'images/IMG_5128.webp',
    'images/IMG_5129.webp',
    'images/IMG_5130.webp',
    'images/IMG_5131.webp',
    'images/IMG_5132.webp',
    'images/IMG_5133.webp',
    'images/IMG_5134.webp',
    'images/IMG_5135.webp',
    'images/IMG_5136.webp',
    'images/IMG_5137.webp',
    'images/IMG_5138.webp',
    'images/IMG_5139.webp',
    'images/IMG_5140.webp',
    'images/IMG_5141.webp',
    'images/IMG_5142.webp',
    'images/IMG_5143.webp',
    'images/IMG_5144.webp',
    'images/IMG_5145.webp',
    'images/IMG_5146.webp',
    'images/IMG_5147.webp',
    'images/IMG_5148.webp',
    'images/IMG_5149.webp',
    'images/IMG_5150.webp',
    'images/IMG_5151.webp',
    'images/IMG_5152.webp',
    'images/IMG_5153.webp',
    'images/IMG_5154.webp',
    'images/IMG_5155.webp',
    'images/IMG_5156.webp',
    'images/IMG_5157.webp',
    'images/IMG_5158.webp',
    'images/IMG_5159.webp',
    'images/IMG_5160.webp'
];

const STORAGE_KEY = 'boda_juan_manuel_luz_mariana_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================
function isYouTubeVideo(item) {
    return item.startsWith('youtube:');
}

function getYouTubeId(item) {
    return item.replace('youtube:', '');
}

function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún. Por favor, sube las fotos al directorio images/</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        // Determine if it's a YouTube video or image
        const isVideo = isYouTubeVideo(photo);
        const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

        let mediaHTML;
        if (isVideo) {
            const videoId = getYouTubeId(photo);
            const thumbnail = getYouTubeThumbnail(videoId);
            mediaHTML = `
                <div class="photo-image-container video-container">
                    <img src="${thumbnail}" alt="${displayNumber}" loading="lazy">
                    <div class="video-overlay">
                        <div class="play-button">▶</div>
                    </div>
                </div>
            `;
        } else {
            mediaHTML = `
                <div class="photo-image-container">
                    <img src="${photo}" alt="${displayNumber}" loading="lazy">
                </div>
            `;
        }

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const isVideo = isYouTubeVideo(photo);
    const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    // Clear previous content and add new media
    if (isVideo) {
        const videoId = getYouTubeId(photo);
        const embedUrl = getYouTubeEmbedUrl(videoId);
        modalImageContainer.innerHTML = `
            <iframe id="modalImage"
                src="${embedUrl}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="youtube-iframe">
            </iframe>
            <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
        `;
    } else {
        modalImageContainer.innerHTML = `
            <img id="modalImage" src="${photo}" alt="${displayNumber}">
            <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
        `;
    }

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
// ========================================// NAVIGATION FUNCTIONS// ========================================function navigatePhoto(direction) {    if (currentPhotoIndex === null) return;        let newIndex;    if (direction === "next") {        newIndex = currentPhotoIndex + 1;        if (newIndex >= photos.length) {            newIndex = 0;        }    } else if (direction === "prev") {        newIndex = currentPhotoIndex - 1;        if (newIndex < 0) {            newIndex = photos.length - 1;        }    }        saveCurrentSelections();    openModal(newIndex);}function saveCurrentSelections() {    if (currentPhotoIndex === null) return;        const selectedCategories = {};    let hasAnySelection = false;        document.querySelectorAll(".option-btn").forEach(btn => {        const category = btn.dataset.category;        const isSelected = btn.classList.contains("selected");        selectedCategories[category] = isSelected;        if (isSelected) hasAnySelection = true;    });        if (hasAnySelection) {        photoSelections[currentPhotoIndex] = selectedCategories;    } else {        delete photoSelections[currentPhotoIndex];    }        saveSelections();    updateStats();    updateFilterButtons();}function updateNavigationButtons() {    const btnPrev = document.getElementById("btnPrevPhoto");    const btnNext = document.getElementById("btnNextPhoto");        if (btnPrev && btnNext) {        btnPrev.disabled = false;        btnNext.disabled = false;    }}
    const modal = document.getElementById('photoModal');
// ========================================// NAVIGATION FUNCTIONS// ========================================function navigatePhoto(direction) {    if (currentPhotoIndex === null) return;        let newIndex;    if (direction === "next") {        newIndex = currentPhotoIndex + 1;        if (newIndex >= photos.length) {            newIndex = 0;        }    } else if (direction === "prev") {        newIndex = currentPhotoIndex - 1;        if (newIndex < 0) {            newIndex = photos.length - 1;        }    }        saveCurrentSelections();    openModal(newIndex);}function saveCurrentSelections() {    if (currentPhotoIndex === null) return;        const selectedCategories = {};    let hasAnySelection = false;        document.querySelectorAll(".option-btn").forEach(btn => {        const category = btn.dataset.category;        const isSelected = btn.classList.contains("selected");        selectedCategories[category] = isSelected;        if (isSelected) hasAnySelection = true;    });        if (hasAnySelection) {        photoSelections[currentPhotoIndex] = selectedCategories;    } else {        delete photoSelections[currentPhotoIndex];    }        saveSelections();    updateStats();    updateFilterButtons();}function updateNavigationButtons() {    const btnPrev = document.getElementById("btnPrevPhoto");    const btnNext = document.getElementById("btnNextPhoto");        if (btnPrev && btnNext) {        btnPrev.disabled = false;        btnNext.disabled = false;    }}
    modal.classList.remove('active');
// ========================================// NAVIGATION FUNCTIONS// ========================================function navigatePhoto(direction) {    if (currentPhotoIndex === null) return;        let newIndex;    if (direction === "next") {        newIndex = currentPhotoIndex + 1;        if (newIndex >= photos.length) {            newIndex = 0;        }    } else if (direction === "prev") {        newIndex = currentPhotoIndex - 1;        if (newIndex < 0) {            newIndex = photos.length - 1;        }    }        saveCurrentSelections();    openModal(newIndex);}function saveCurrentSelections() {    if (currentPhotoIndex === null) return;        const selectedCategories = {};    let hasAnySelection = false;        document.querySelectorAll(".option-btn").forEach(btn => {        const category = btn.dataset.category;        const isSelected = btn.classList.contains("selected");        selectedCategories[category] = isSelected;        if (isSelected) hasAnySelection = true;    });        if (hasAnySelection) {        photoSelections[currentPhotoIndex] = selectedCategories;    } else {        delete photoSelections[currentPhotoIndex];    }        saveSelections();    updateStats();    updateFilterButtons();}function updateNavigationButtons() {    const btnPrev = document.getElementById("btnPrevPhoto");    const btnNext = document.getElementById("btnNextPhoto");        if (btnPrev && btnNext) {        btnPrev.disabled = false;        btnNext.disabled = false;    }}
    document.body.style.overflow = 'auto';
// ========================================// NAVIGATION FUNCTIONS// ========================================function navigatePhoto(direction) {    if (currentPhotoIndex === null) return;        let newIndex;    if (direction === "next") {        newIndex = currentPhotoIndex + 1;        if (newIndex >= photos.length) {            newIndex = 0;        }    } else if (direction === "prev") {        newIndex = currentPhotoIndex - 1;        if (newIndex < 0) {            newIndex = photos.length - 1;        }    }        saveCurrentSelections();    openModal(newIndex);}function saveCurrentSelections() {    if (currentPhotoIndex === null) return;        const selectedCategories = {};    let hasAnySelection = false;        document.querySelectorAll(".option-btn").forEach(btn => {        const category = btn.dataset.category;        const isSelected = btn.classList.contains("selected");        selectedCategories[category] = isSelected;        if (isSelected) hasAnySelection = true;    });        if (hasAnySelection) {        photoSelections[currentPhotoIndex] = selectedCategories;    } else {        delete photoSelections[currentPhotoIndex];    }        saveSelections();    updateStats();    updateFilterButtons();}function updateNavigationButtons() {    const btnPrev = document.getElementById("btnPrevPhoto");    const btnNext = document.getElementById("btnNextPhoto");        if (btnPrev && btnNext) {        btnPrev.disabled = false;        btnNext.disabled = false;    }}
    currentPhotoIndex = null;
// ========================================// NAVIGATION FUNCTIONS// ========================================function navigatePhoto(direction) {    if (currentPhotoIndex === null) return;        let newIndex;    if (direction === "next") {        newIndex = currentPhotoIndex + 1;        if (newIndex >= photos.length) {            newIndex = 0;        }    } else if (direction === "prev") {        newIndex = currentPhotoIndex - 1;        if (newIndex < 0) {            newIndex = photos.length - 1;        }    }        saveCurrentSelections();    openModal(newIndex);}function saveCurrentSelections() {    if (currentPhotoIndex === null) return;        const selectedCategories = {};    let hasAnySelection = false;        document.querySelectorAll(".option-btn").forEach(btn => {        const category = btn.dataset.category;        const isSelected = btn.classList.contains("selected");        selectedCategories[category] = isSelected;        if (isSelected) hasAnySelection = true;    });        if (hasAnySelection) {        photoSelections[currentPhotoIndex] = selectedCategories;    } else {        delete photoSelections[currentPhotoIndex];    }        saveSelections();    updateStats();    updateFilterButtons();}function updateNavigationButtons() {    const btnPrev = document.getElementById("btnPrevPhoto");    const btnNext = document.getElementById("btnNextPhoto");        if (btnPrev && btnNext) {        btnPrev.disabled = false;        btnNext.disabled = false;    }}
}
// ========================================// NAVIGATION FUNCTIONS// ========================================function navigatePhoto(direction) {    if (currentPhotoIndex === null) return;        let newIndex;    if (direction === "next") {        newIndex = currentPhotoIndex + 1;        if (newIndex >= photos.length) {            newIndex = 0;        }    } else if (direction === "prev") {        newIndex = currentPhotoIndex - 1;        if (newIndex < 0) {            newIndex = photos.length - 1;        }    }        saveCurrentSelections();    openModal(newIndex);}function saveCurrentSelections() {    if (currentPhotoIndex === null) return;        const selectedCategories = {};    let hasAnySelection = false;        document.querySelectorAll(".option-btn").forEach(btn => {        const category = btn.dataset.category;        const isSelected = btn.classList.contains("selected");        selectedCategories[category] = isSelected;        if (isSelected) hasAnySelection = true;    });        if (hasAnySelection) {        photoSelections[currentPhotoIndex] = selectedCategories;    } else {        delete photoSelections[currentPhotoIndex];    }        saveSelections();    updateStats();    updateFilterButtons();}function updateNavigationButtons() {    const btnPrev = document.getElementById("btnPrevPhoto");    const btnNext = document.getElementById("btnNextPhoto");        if (btnPrev && btnNext) {        btnPrev.disabled = false;        btnNext.disabled = false;    }}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda Juan Manuel & Luz Mariana',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-juan-manuel-luz-mariana-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💒 SELECCIÓN DE FOTOS - BODA JUAN MANUEL & LUZ MARIANA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
} else if (e.key === 'ArrowLeft') {                navigatePhoto('prev');            } else if (e.key === 'ArrowRight') {                navigatePhoto('next');
                saveModalSelection();
            }
        }
    });

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
    console.log('Selecciones cargadas:', photoSelections);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
    // Navigation button event listeners
    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });
    
    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

// ========================================
// DISABLE RIGHT CLICK ON IMAGES
