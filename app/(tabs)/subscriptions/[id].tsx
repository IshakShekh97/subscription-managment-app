import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>SubscriptionsDetails: {id}</Text>
      <Link href={"/"}>
        <Text className="text-blue-500">Back to Home</Text>
      </Link>
    </View>
  );
};

export default SubscriptionsDetails;
