export class CreatePlanDto {
  readonly id!:string;
  readonly title!: string;
  readonly images!: [string];
  readonly description!: string;
  readonly fromTime!: Date;
  readonly toTime!: Date;
  readonly tags!: [string];
  readonly resultArea!: Boolean;
}