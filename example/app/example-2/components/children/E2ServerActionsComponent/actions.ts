'use server';

import { getTwoServerState } from '../../state';

export async function actionIncrementCounter(formData: FormData) {
  console.log('Server action: increment');
  const [state, updateState] = await getTwoServerState();

  updateState({
    counter: Number(state.counter ?? 0) + 1
  });

  return { message: 'Updated' };
}
export async function actionDecrementCounter(formData: FormData) {
  console.log('Server action: decrement');
  const [state, updateState] = await getTwoServerState();

  updateState({
    counter: Number(state.counter ?? 0) - 1
  });

  return { message: 'Updated' };
}
