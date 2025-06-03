// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white mb-4">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">
        {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;
