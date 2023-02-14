export default function mainTableDTO(item, product, productMAP) {
  if (!product && !productMAP) {
    return {
      storageUnit: item.storageUnit,
      materialCodeScanned: item.materialCodeScanned,
      stockCategory: item.specialStock,
      specialStockNumber: item.specialStockNumber,
      countedQuantity: item.countedQuantity,
      scannedLocation: item.stockLocation,
      timeAndDateOfScanning: item.createdAt,
      difference: item.countedQuantity,
      scannedBy: item.scannedBy,
    };
  }
  return {
    storageUnit: item.storageUnit,
    materialCodeScanned: item.materialCodeScanned,
    materialCodeSAP: productMAP.Material,
    description: productMAP.Description,
    stockCategory: item.specialStock,
    specialStockNumber: item.specialStockNumber,
    countedQuantity: item.countedQuantity,
    scannedLocation: item.stockLocation,
    timeAndDateOfScanning: item.createdAt,
    SAPQuantity: product ? product["Available Stock"] : 0,
    SAPAddress: product["StorageBin"] || "",
    customers: productMAP["Prod Hierarchy Desc"] || "",
    // difference: item.countedQuantity - (product["Available Stock"] || 0),
    difference: item.countedQuantity - (product["Available Stock"] || 0),
    MAP: productMAP?.MAP || 0,
    value: productMAP?.MAP ? item.countedQuantity * productMAP?.MAP : 0,
    scannedBy: item.scannedBy,
  };
}
