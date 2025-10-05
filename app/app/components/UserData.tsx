"use client";

import { useUsers } from "../hooks/useApi";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
};

export default function UserData() {
  const { data: users, isLoading, error, isError } = useUsers();

  // Component-level loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-48 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
        </div>
      </div>
    );
  }

  // Component-level error state
  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-red-800 font-semibold mb-2">
          Failed to load user data
        </h3>
        <p className="text-red-600 text-sm">
          {error?.message || "Something went wrong while fetching data"}
        </p>
        <button
          onClick={() => window.location.reload()}
          type="button"
          className="mt-2 text-red-600 hover:text-red-800 underline text-sm"
        >
          Retry
        </button>
      </div>
    );
  }

  // Success state
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Users List</h2>
      {users && Array.isArray(users) && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user: User) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{user.name}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Website:</strong> {user.website}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Company:</strong> {user.company?.name}
              </p>
              <p className="text-sm text-gray-600">
                <strong>City:</strong> {user.address?.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
