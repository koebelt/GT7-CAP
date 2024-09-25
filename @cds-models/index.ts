// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './_';
import * as _sap_common from './sap/common';
export type Language = __.Association.to<_sap_common.Language>;
export type Currency = __.Association.to<_sap_common.Currency>;
export type Country = __.Association.to<_sap_common.Country>;
export type Timezone = __.Association.to<_sap_common.Timezone>;
export type User = string;
// the following represents the CDS aspect 'cuid'
export function _cuidAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class cuid extends Base {
        ID?: string;
      static readonly actions: Record<never, never>
  };
}
export class cuid extends _cuidAspect(__.Entity) {}
// the following represents the CDS aspect 'managed'
export function _managedAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class managed extends Base {
        createdAt?: __.CdsTimestamp | null;
    /**
    * Canonical user ID
    */
        createdBy?: User | null;
        modifiedAt?: __.CdsTimestamp | null;
    /**
    * Canonical user ID
    */
        modifiedBy?: User | null;
      static readonly actions: Record<never, never>
  };
}
export class managed extends _managedAspect(__.Entity) {}
// the following represents the CDS aspect 'temporal'
export function _temporalAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class temporal extends Base {
        validFrom?: __.CdsTimestamp | null;
        validTo?: __.CdsTimestamp | null;
      static readonly actions: Record<never, never>
  };
}
export class temporal extends _temporalAspect(__.Entity) {}
// the following represents the CDS aspect 'extensible'
export function _extensibleAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class extensible extends Base {
        extensions__?: string | null;
      static readonly actions: Record<never, never>
  };
}
export class extensible extends _extensibleAspect(__.Entity) {}
export function _LapTimeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class LapTime extends Base {
        lap?: number | null;
        time?: number | null;
        best?: boolean | null;
      static readonly actions: Record<never, never>
  };
}
export class LapTime extends _LapTimeAspect(__.Entity) {}
Object.defineProperty(LapTime, 'name', { value: 'LapTime' })
Object.defineProperty(LapTime, 'is_singular', { value: true })
