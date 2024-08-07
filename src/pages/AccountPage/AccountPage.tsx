import { EditUserPassword } from '../../components/EditUserPassword/EditUserPassword';
import { EditUserProfile } from '../../components/EditUserProfile/EditUserProfile';

export const AccountPage = () => {
  return (
    <>
      <EditUserProfile />
      <EditUserPassword />
    </>
  );
};
