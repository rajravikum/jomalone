import { LoadingActions } from './actionTypes';

export const LoadProductRequestAction = (): LoadingActions => ({
  type: 'LOAD_PRODUCTS_REQUEST',
});

export const LoadCartRequestAction = (): LoadingActions => ({
  type: 'LOAD_CART_REQUEST',
});

export default (state: any = {}, { type, processId }: LoadingActions) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!matches) return state;

  const id = processId ? `_${processId}` : '';

  if (matches[2] === 'REQUEST') {
    return { ...state, [`${matches[1]}${id}`]: true };
  }

  const { [`${matches[1]}${id}`]: data, ...loading } = state;

  return loading;
};
