import {
  CreateShippingOptionTypeDTO,
  UpdateShippingOptionTypeDTO,
} from "./shipping-option-type"
import { ShippingOptionPriceType } from "../common"
import {
  CreateShippingOptionRuleDTO,
  UpdateShippingOptionRuleDTO,
} from "./shipping-option-rule"

export interface CreateShippingOptionDTO {
  name: string
  price_type: ShippingOptionPriceType
  service_zone_id: string
  shipping_profile_id: string
  service_provider_id: string
  type: Omit<CreateShippingOptionTypeDTO, "shipping_option_id">
  data?: Record<string, unknown> | null
  rules?: Omit<CreateShippingOptionRuleDTO, "shipping_option_id">[]
}

export interface UpdateShippingOptionDTO {
  id: string
  name?: string
  price_type?: ShippingOptionPriceType
  service_zone_id?: string
  shipping_profile_id?: string
  service_provider_id?: string
  type:
    | Omit<CreateShippingOptionTypeDTO, "shipping_option_id">
    | Omit<UpdateShippingOptionTypeDTO, "shipping_option_id">
  data?: Record<string, unknown> | null
  rules?: (
    | Omit<CreateShippingOptionRuleDTO, "shipping_option_id">
    | Omit<UpdateShippingOptionRuleDTO, "shipping_option_id">
  )[]
}
