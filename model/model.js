module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define(
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
  const Banner = sequelize.define(
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
  const News = sequelize.define(
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
      newsType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      personPostID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "news",
    }
  );
  const Media = sequelize.define(
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
  const Manager = sequelize.define(
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
  const Client = sequelize.define(
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
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isLoan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      storeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "client",
    }
  );
  const Store = sequelize.define(
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
      addressID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      idMap: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "store",
    }
  );
  const Address = sequelize.define(
    "Address",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Street: {
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
      tableName: "address",
      timestamps: true,
    }
  );
  module.exports = {
    Address,
    Store,
    Client,
    Manager,
    Media,
    News,
    Banner,
    Partner,
  };
};
