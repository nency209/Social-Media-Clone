// SettingsPage.tsx
import  { deleteAccount } from "../../services/deleteAccount";

export const SettingsPage = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <button
        onClick={deleteAccount}
        className="bg-red-600 px-4 py-2 rounded hover:cursor-pointer"
      >
        Delete My Account
      </button>
    </div>
  );
};
