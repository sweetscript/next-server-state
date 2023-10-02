'use server';

import { getE1ServerState } from '../../state';

export async function actionUpdateName(formData: FormData) {
  console.log('Server action: actionUpdateName', formData);

  const [, updateState] = await getE1ServerState();

  await updateState({
    first_name: `${formData?.get('first_name') || ''}`,
    last_name: `${formData?.get('last_name') || ''}`
  });

  return {
    message: 'Name Updated'
  };
}
