const db = require("./db");
const { Sequelize, DataTypes } = require("sequelize");

const Partner = db.define(
  "Partner",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: "partner",
  }
);
const Banner = db.define(
  "Banner",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: "banner",
  }
);
const uploadImages = db.define(
  "UploadImages",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    img: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: "UploadImages",
  }
);
const News = db.define(
  "News",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "news",
  }
);
const Media = db.define(
  "Media",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlVideo: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: "media",
  }
);
const Manager = db.define(
  "Manager",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    account: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    admin: {
      type: DataTypes.BOOLEAN,
      // allowNull defaults to true
    },
    newsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mediaID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "manager",
  }
);
const Client = db.define(
  "Client",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loanType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isLoan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "client",
  }
);
const Store = db.define(
  "Store",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    idMap: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Store",
  }
);

db.sync();
Store.hasMany(Client), Client.belongsTo(Store);
module.exports = {
  Store,
  Client,
  Manager,
  Media,
  News,
  Banner,
  Partner,
  uploadImages,
};
