'use server';

import { getE3ServerState } from '../../state';

export async function actionUpdateNote(formData: FormData) {
  console.log('Server action: actionUpdateNote', formData);

  const [, updateState] = await getE3ServerState();

  await updateState({
    note: `${formData?.get('note') || ''}`
  });

  return {
    message: 'Note Updated'
  };
}
