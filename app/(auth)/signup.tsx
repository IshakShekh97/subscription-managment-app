import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href={"/(auth)/signin"} className="text-blue-500">
        Already have an account? Sign in
      </Link>
    </View>
  );
};

export default Signup;
