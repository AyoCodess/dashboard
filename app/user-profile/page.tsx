import { UserProfile } from '@clerk/nextjs';

function UserProfilePage() {
  return (
    <div className="sm:overflow-y-scroll sm:h-[90vh] sm:w-fit sm:py-10">
      <UserProfile
        path="/user-profile"
        routing="path"
        appearance={{
          variables: {
            colorPrimary: '#000000'
          },
          elements: {
            profileSectionTitle__profile: {
              display: 'none'
            },
            profileSectionContent__profile: {
              display: 'none'
            },
            navbarMobileMenuButton: {
              display: 'none'
            }
          }
        }}
      />
    </div>
  );
}

export default UserProfilePage;
