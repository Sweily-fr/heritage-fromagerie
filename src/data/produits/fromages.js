const fromages = [
  {
    slug: "comte-18-mois",
    name: "Comté 18 mois",
    origin: "Franche-Comté, France",
    tag: "Pâtes Dures",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 4,20 € / 100g",
    description:
      "Affinage long révélant des notes de fruits secs et de caramel. Le roi des fromages franc-comtois.",
    details:
      "Notre Comté 18 mois est sélectionné dans les caves du Jura, où il développe lentement ses arômes complexes. La pâte, d'un jaune doré profond, offre une texture souple et fondante. En bouche, on découvre des notes de noisette grillée, de fruits secs et une pointe de caramel qui témoigne de sa longue maturation. Un fromage d'exception, parfait en plateau ou en dégustation.",
    milkType: "Lait cru de vache",
    texture: "Pâte pressée cuite",
    affinage: "18 mois minimum",
    accord: "Vin jaune du Jura, Savagnin",
  },
  {
    slug: "sainte-maure-de-touraine",
    name: "Sainte-Maure de Touraine",
    origin: "Centre-Val de Loire, France",
    tag: "Chèvre",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 3,80 € / 100g",
    description:
      "Fromage de chèvre AOP à la texture fondante et au goût fin, reconnaissable à sa paille de seigle.",
    details:
      "Ce fromage de chèvre emblématique de la Touraine se distingue par sa forme allongée traversée d'une paille de seigle, gage de son authenticité AOP. Sous sa croûte cendrée bleutée, la pâte blanche et crémeuse dévoile des saveurs délicates, légèrement acidulées, avec des notes de noisette. Un classique incontournable de nos plateaux.",
    milkType: "Lait cru de chèvre",
    texture: "Pâte molle à croûte fleurie",
    affinage: "10 jours minimum",
    accord: "Sancerre, Vouvray sec",
  },
  {
    slug: "tomme-du-jura",
    name: "Tomme du Jura",
    origin: "Jura, France",
    tag: "Pâtes Dures",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 3,50 € / 100g",
    description:
      "Saveur douce, légèrement salée et fruitée. Un fromage de caractère aux arômes subtils de noisette.",
    details:
      "La Tomme du Jura est un fromage de tradition qui puise son caractère dans les alpages jurassiens. Sa croûte naturelle, grise et rugueuse, protège une pâte souple et onctueuse aux reflets dorés. Les arômes de noisette et de beurre frais s'expriment avec délicatesse, accompagnés d'une légère pointe de sel qui rehausse l'ensemble.",
    milkType: "Lait cru de vache",
    texture: "Pâte pressée non cuite",
    affinage: "2 à 3 mois",
    accord: "Côtes du Jura, Arbois blanc",
  },
  {
    slug: "raclette-brezain-fumee",
    name: "Raclette Brézain Fumée",
    origin: "Savoie, France",
    tag: "Pâtes Dures",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 3,90 € / 100g",
    description:
      "Une raclette onctueuse au délicat parfum fumé, idéale pour vos soirées conviviales.",
    details:
      "Le Brézain est une raclette savoyarde fumée au bois de hêtre selon une méthode traditionnelle qui lui confère son goût si particulier. Sa texture fondante et son arôme boisé subtil en font la star des soirées raclette. Elle se distingue par sa croûte ambrée et son fondant incomparable à la dégustation.",
    milkType: "Lait pasteurisé de vache",
    texture: "Pâte pressée non cuite",
    affinage: "8 semaines",
    accord: "Apremont, Roussette de Savoie",
  },
  {
    slug: "roquefort-papillon",
    name: "Roquefort Papillon",
    origin: "Aveyron, France",
    tag: "Pâte Persillée",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 4,50 € / 100g",
    description:
      "Le roi des fromages bleus, affiné dans les caves naturelles de Roquefort-sur-Soulzon.",
    details:
      "Ce Roquefort d'exception est affiné dans les caves naturelles de Roquefort-sur-Soulzon, où les fleurines — fissures dans la roche — créent un microclimat unique. La pâte, onctueuse et persillée de veines bleu-vert, offre une complexité aromatique intense : notes de beurre, de champignon et une salinité caractéristique parfaitement équilibrée.",
    milkType: "Lait cru de brebis",
    texture: "Pâte persillée",
    affinage: "3 mois minimum en caves",
    accord: "Sauternes, Porto vintage",
  },
  {
    slug: "camembert-de-normandie",
    name: "Camembert de Normandie",
    origin: "Normandie, France",
    tag: "Pâtes Molles",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 5,90 € / pièce",
    description:
      "Le véritable Camembert au lait cru, moulé à la louche, symbole du terroir normand.",
    details:
      "Notre Camembert de Normandie AOP est fabriqué selon la tradition : lait cru, moulage à la louche et affinage soigné. Sous sa croûte fleurie d'un blanc duveteux, la pâte coulante libère des arômes de crème fraîche, de champignon et une légère amertume végétale. Un fromage vivant qui évolue chaque jour dans votre réfrigérateur.",
    milkType: "Lait cru de vache",
    texture: "Pâte molle à croûte fleurie",
    affinage: "21 jours minimum",
    accord: "Cidre brut, Pommeau de Normandie",
  },
  {
    slug: "morbier",
    name: "Morbier",
    origin: "Franche-Comté, France",
    tag: "Pâtes Dures",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 3,60 € / 100g",
    description:
      "Reconnaissable à sa raie cendrée, ce fromage franc-comtois séduit par sa douceur et son fruité.",
    details:
      "Le Morbier tire son nom du village éponyme du Jura. Sa signature : une fine ligne de cendre végétale qui sépare la pâte en deux, héritage d'une pratique fromagère ancestrale. La pâte, souple et crémeuse, délivre des arômes fruités et une saveur douce avec une légère pointe d'amertume en fin de bouche. Un fromage élégant et accessible.",
    milkType: "Lait cru de vache",
    texture: "Pâte pressée non cuite",
    affinage: "45 jours minimum",
    accord: "Chardonnay du Jura, Poulsard",
  },
  {
    slug: "brie-de-meaux",
    name: "Brie de Meaux",
    origin: "Île-de-France",
    tag: "Pâtes Molles",
    category: "fromages",
    image: "/images/produits/fromages/Agour.png",
    price: "À partir de 3,70 € / 100g",
    description:
      "Le « roi des fromages », un Brie d'exception au lait cru, crémeux et délicat.",
    details:
      "Surnommé « roi des fromages » depuis le Congrès de Vienne en 1815, le Brie de Meaux AOP est un chef-d'œuvre de la fromagerie française. Sa croûte blanche striée de rouge abrite une pâte crémeuse, presque coulante à cœur, aux arômes de champignon, de crème et de noisette. Un fromage noble qui demande à être dégusté à température ambiante.",
    milkType: "Lait cru de vache",
    texture: "Pâte molle à croûte fleurie",
    affinage: "4 semaines minimum",
    accord: "Champagne, Bourgogne rouge léger",
  },
];

export default fromages;
