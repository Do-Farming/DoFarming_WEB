import React, { useState } from "react";
import PackageDelete from "./PackageDelete";

const MakePackage = () => {
  const [packages, setPackages] = useState([]);
  const [editingPackageId, setEditingPackageId] = useState(null); 

  const handleAddPackage = (name, status) => {
    const newPackage = {
      id: Math.random(), 
      name,
      status,
    };
    setPackages([...packages, newPackage]);
  };

  const handleEditPackage = (packageId, newName, newStatus) => {
    const updatedPackages = packages.map((pkg) => {
      if (pkg.id === packageId) {
        return {
          ...pkg,
          name: newName,
          status: newStatus,
        };
      }
      return pkg;
    });
    setPackages(updatedPackages);
    setEditingPackageId(null); 
  };

  const handleDeletePackage = (packageId) => {
    const updatedPackages = packages.filter((pkg) => pkg.id !== packageId);
    setPackages(updatedPackages);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const status = e.target.status.value;
          if (editingPackageId) {
            handleEditPackage(editingPackageId, name, status);
          } else {
            handleAddPackage(name, status);
          }
          e.target.reset();
        }}
      >
        <input type="text" name="name" placeholder="패키지 이름" required />
        <input type="text" name="status" placeholder="패키지 상태" required />
        <button type="submit">{editingPackageId ? "수정" : "추가"}</button>
      </form>
      {packages.length === 0 ? (
        <div><p>아직 루틴이 없습니다 </p><p>루틴을 추가하세요.</p></div>
      ) : (
        packages.map((pkg) => (
          <div key={pkg.id}>
            {editingPackageId === pkg.id ? (
              <PackageEdit
                packageInfo={pkg}
                handleEditPackage={handleEditPackage}
              />
            ) : (
              <PackageDelete
                packageInfo={pkg}
                handleDeletePackage={handleDeletePackage}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MakePackage;
