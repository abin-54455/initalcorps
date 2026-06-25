import React, { useState } from "react";
import Welcome from "../../components/abin/welcome.jsx";
import AdminSignInModal from "../../components/abin/adminlogin.jsx";

function Welcomepage() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleRoleSelect = (role) => {
    if (role === "admin") {
      setShowAdminLogin(true);
    }
  };

  return (
    <>
      <Welcome onSelectRole={handleRoleSelect} />

      {showAdminLogin && (
        <AdminSignInModal
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </>
  );
}

export default Welcomepage;