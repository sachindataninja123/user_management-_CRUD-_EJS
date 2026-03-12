const userModel = require("../models/userModel");

const getUsers = async (req, res) => {
  res.render("index");
};

const allUsers = async (req, res) => {
  const users = await userModel.find();
  res.render("read", { users });
};

const createUser = async (req, res) => {
  try {
    const { name, email, image } = req.body;

    const user = await userModel.create({
      name,
      email,
      image,
    });

    res.redirect("/users/allusers");
  } catch (error) {
    console.log(error);
    res.send("Error creating user");
  }
};

const deleteUser = async (req, res) => {
  const user = await userModel.findOneAndDelete({
    _id: req.params.id,
  });

  res.redirect("/users/allusers");
};

const editUser = async (req, res) => {
  const user = await userModel.findOne({ _id: req.params.id });

  res.render("update", { user });
};

const updateUser = async (req, res) => {
  const { name, email, image } = req.body;

  let user = await userModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { image, name, email },
    { new: true },
  );
  res.redirect("/users/allusers")
};




module.exports = { getUsers, allUsers, createUser ,deleteUser , updateUser , editUser};
