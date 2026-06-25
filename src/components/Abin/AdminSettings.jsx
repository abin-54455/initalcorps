import React, { useState } from "react";
import AdminEdits from "./AdminEdits"; 
import ResetPassword from "./ResetPassword"; 
import ResetWhatsApp from "./ResetWhatsApp"; 
import { Pencil } from "lucide-react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";

const AdminSettings = ({ passwordData, whatsappData, onEditPassword, onEditNumber }) => {
  // Track which card is currently open for editing: null | "password" | "whatsapp"
  const [editMode, setEditMode] = useState(null);

  // Password save handler
  const handleSavePassword = (newPassword) => {
    if (onEditPassword) {
      onEditPassword(newPassword);
    }
    setEditMode(null); // Close form view
  };

  // WhatsApp save handler
  const handleSaveWhatsApp = (newNumber) => {
    const formattedNumber = newNumber.startsWith("+") ? newNumber : `+${newNumber}`;
    if (onEditNumber) {
      onEditNumber(formattedNumber);
    }
    setEditMode(null); // Close form view
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">

      {/* Settings Layout Section Header Panel */}
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
          Settings
        </h2>
      </div>

      <div className="space-y-6">

        {/* --- EXECUTIVE LOGIN PASSWORD SECTION --- */}
        <div>
          {editMode === "password" ? (
            <ResetPassword 
              email={passwordData?.email || "admin@initialcorps.in"}
              onSavePassword={handleSavePassword}
              onCancel={() => setEditMode(null)}
            />
          ) : (
            <AdminEdits
              title="Executive Login Password"
              description={`Password for admin access (email: ${passwordData?.email || "admin@initialcorps.in"})`}
              label="Current Password"
              value={"•".repeat(passwordData?.passwordLength || 8)}
              icon={<BsBoxArrowInRight className="text-slate-800 w-5 h-5 sm:w-6 sm:h-6" />}
              buttonText={
                <>
                  <Pencil className="w-3.5 h-3.5" /> Edit Password
                </>
              }
              onEdit={() => setEditMode("password")}
            />
          )}
        </div>

        {/* --- WHATSAPP CONTACT NUMBER SECTION --- */}
        <div>
          {editMode === "whatsapp" ? (
            <ResetWhatsApp 
              initialNumber={(whatsappData?.number || "+919876543210").replace("+", "")}
              onSaveChanges={handleSaveWhatsApp}
              onCancel={() => setEditMode(null)}
            />
          ) : (
            <AdminEdits
              title="WhatsApp Contact Number"
              description="This number will be used for customer inquiries"
              label="Current Number"
              value={whatsappData?.number || "+919876543210"}
              icon={<FiMessageSquare className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />}
              buttonText={
                <>
                  <Pencil className="w-3.5 h-3.5" /> Edit Number
                </>
              }
              onEdit={() => setEditMode("whatsapp")}
            />
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminSettings;