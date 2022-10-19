import { ElForm, ElDialog, ElTree } from 'element-plus'
import type {
  RuleItem
} from 'async-validator'
// import { FormItemRule } from 'element-plus/packages/form/src/form.type'
export type Arrayable<T> = T | T[]

export type IElForm = InstanceType<typeof ElForm>
export type IElDialog = InstanceType<typeof ElDialog>
export type IElTree = InstanceType<typeof ElTree>

// export type IFormRule = Record<string, FormItemRule[]>
export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}
export type IFormRule = Partial<Record<string, Arrayable<FormItemRule>>>
