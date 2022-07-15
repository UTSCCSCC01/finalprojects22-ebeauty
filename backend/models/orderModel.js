import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "please add a first name"],
    },

    lastName: {
      type: String,
      require: [true, "please add a last name"],
    },
    address: {
      addressOne: {
        type: String,
        require: [true, "please add a first name"],
      },

      addressTwo: {
        type: String,
        require: [true, "please add a last name"],
      },

      city: {
        type: String,
        require: [true, "please add a email"],
        unique: true,
      },

      province: {
        type: String,
        require: [true, "please add a password"],
      },

      postalCode: {
        type: String,
        require: [true, "please add a password"],
      },

      country: {
        type: String,
        require: [true, "please add a password"],
      },
    },

    payment: {
      nameOnCard: {
        type: String,
        require: [true, "please add a email"],
        unique: true,
      },

      cardNumber: {
        type: String,
        require: [true, "please add a password"],
      },

      expiryMonth: {
        type: String,
        require: [true, "please add a password"],
      },

      expiryYear: {
        type: String,
        require: [true, "please add a password"],
      },
      cvv: {
        type: String,
        require: [true, "please add a password"],
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
