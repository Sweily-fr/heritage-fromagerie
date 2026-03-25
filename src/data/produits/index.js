import fromages from "./fromages";
import cremerie from "./cremerie";
import epicerieFine from "./epicerie-fine";

export { fromages, cremerie, epicerieFine };

const allProduits = [...fromages, ...cremerie, ...epicerieFine];

export default allProduits;
