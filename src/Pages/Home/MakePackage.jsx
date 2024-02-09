// 서버랑 연결하면 될 듯?? 
import React, { useState  } from "react";
import PackageDelete from "./PackageDelete";

const MakePackage = () => {
  const [packages, setPackages] = useState([]);
  const [editingPackageId, setEditingPackageId] = useState(null);
  const [hasPackages, setHasPackages] = useState(false);

  const handleAddPackage = (name, status) => {
    const newPackage = {
      id: Math.random(),
      name,
      status,
    };
    setPackages([...packages, newPackage]);
    setHasPackages(true);
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
    if (updatedPackages.length === 0) {
      setHasPackages(false);
    }
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
       
      </form>
      {!hasPackages && (
        <div id="RoutineZero">
          <p id="Zero1">아직 루틴이 없습니다</p>
          <p id="Zero2">루틴을 추가하세요.</p>
        </div>
      )}
      {hasPackages &&
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
        ))}
    </div>
  );
};

export default MakePackage;
