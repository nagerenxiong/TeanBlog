'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING, UUID } = app.Sequelize;

  const Admin = app.model.define('admin', {
    id: {
      allowNull: false,
      unique: true,
      type: UUID,
      primaryKey: true,
      comment: "主键"
    },
    email: {
      allowNull: false,
      unique: true,
      type: STRING,
      validate: {
        isEmail: true,
      },
      comment: "管理员邮箱"
    },
    password: {
      allowNull: false,
      type: STRING,
      comment: "管理员密码, 使用MD5加密"
    },
    created_at: {
      allowNull: false,
      type: DATE,
      defaultValue: new Date().toLocaleString(),
      comment: "创建日期"
    },
    updated_at: {
      allowNull: false,
      type: DATE,
      defaultValue: new Date().toLocaleString(),
      comment: "更新日期"
    },
  },{ timestamps: false });

  return Admin;
};