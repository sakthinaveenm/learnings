import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { Fragment } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import uuid from "react-native-uuid";
import { AntDesign } from "@expo/vector-icons";

const color = {
  screenBackground: "#1c1c1c",
  DropDownItemsBorderBottom: "#232323",
  headingColor: "#c9c9c9",
  subheadingColor: "#808080",
  emojiIconBackground: "#313131",
};

const DropDown = ({ data }) => {
  console.log(data);
  const { emoji, title, subheading } = data;
  return (
    <View
      style={{
        ...styles.row,
        backgroundColor: color.screenBackground,
        width: wp("100%"),
        paddingVertical: hp(2),
        paddingHorizontal: wp(3),
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: color.DropDownItemsBorderBottom,
      }}
    >
      <View style={styles.row}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.emojiIconBackground,
            padding: wp(4),
            borderRadius: 5,
          }}
        >
          <Text>{emoji}</Text>
        </View>
        <View
          style={{
            paddingLeft: wp(3),
            display: "flex",
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: color.headingColor,
              }}
            >
              {title}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: color.subheadingColor,
              }}
            >
              {subheading}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Feather name="chevron-right" size={20} color={color.headingColor} />
      </TouchableOpacity>
    </View>
  );
};

const data = [
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
  {
    id: uuid.v4(),
    emoji: "💰",
    title: "Finance",
    subheading: "104 Podcast",
  },
];

const Screen1 = () => {
  return (
    <Fragment>
      <View
        style={{
          ...styles.row,
          width: wp("100%"),
          justifyContent: "space-between",
          paddingHorizontal: wp(3),
          paddingBottom: hp(2),
        }}
      >
        <TouchableOpacity>
          <Feather name="chevron-left" size={30} color={color.headingColor} />
        </TouchableOpacity>
        <View
          style={{
            width: wp("40%"),
            // backgroundColor: color.emojiIconBackground,
          }}
        >
          <Text
            style={{
              color: color.headingColor,
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            All Categories
          </Text>
        </View>
        <View></View>
      </View>

      <View
        style={{
          // backgroundColor: color.emojiIconBackground,
          width: wp("100%"),
          paddingVertical: wp(3),
          paddingHorizontal: hp(2),
        }}
      >
        <Text
          style={{
            color: color.headingColor,
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          All Categories
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <DropDown data={item} />}
        keyExtractor={(item) => item.id}
      />
      <View
        style={{
          ...styles.row,
          backgroundColor: color.emojiIconBackground,
          width: wp("100%"),
          paddingVertical: hp(1.8),
          paddingHorizontal: wp(3),
          borderRadius: 12,
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://picsum.photos/id/237/200/300",
            }}
            style={{
              width: wp(12),
              height: wp(12),
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: wp("75%"),
            paddingLeft: wp(3),
          }}
        >
          <View>
            <Text
              style={{
                color: color.headingColor,
                fontWeight: "600",
                fontSize: 18,
              }}
            >
              Kompliziert and ungeretch
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                paddingRight: wp(10),
              }}
            >
              <Text
                style={{
                  color: color.subheadingColor,
                  fontSize: 16,
                }}
              >
                Zelt Online
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: color.subheadingColor,
                  fontSize: 16,
                }}
              >
                32 min left
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="pausecircle" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
