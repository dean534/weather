const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString
} = require("graphql");

const state = {
  YilanCounty: "宜蘭縣",
  TaoyuanCity: "桃園市",
  HsinchuCounty: "新竹縣",
  MiaoliCounty: "苗栗縣",
  ChanghuaCounty: "彰化縣",
  NantouCounty: "南投縣",
  YunlinCounty: "雲林縣",
  ChiayiCounty: "嘉義縣",
  PingtungCounty: "屏東縣",
  TaitungCounty: "臺東縣",
  HualienCounty: "花蓮縣",
  PenghuCounty: "澎湖縣",
  KeelungCity: "基隆市",
  HsinchuCity: "新竹市",
  ChiayiCity: "嘉義市",
  TaipeiCity: "臺北市",
  KaohsiungCity: "高雄市",
  NewTaipeiCity: "新北市",
  TaichungCity: "臺中市",
  TainanCity: "臺南市",
  LienchiangCounty: "連江縣",
  KinmenCounty: "金門縣"
};

const parameterType = new GraphQLObjectType({
  name: "parameter",
  fields: () => ({
    parameterName: { type: GraphQLString },
    parameterValue: { type: GraphQLString }
  })
});

const timeType = new GraphQLObjectType({
  name: "time",
  fields: () => ({
    startTime: { type: GraphQLString },
    endTime: { type: GraphQLString },
    parameter: {
      type: parameterType
    }
  })
});

const weatherElementType = new GraphQLObjectType({
  name: "weatherElement",
  fields: () => ({
    elementName: { type: GraphQLString },
    time: { type: GraphQLList(timeType) }
  })
});

const locationType = new GraphQLObjectType({
  name: "location",
  fields: () => ({
    locationName: { type: GraphQLString },
    weatherElement: { type: GraphQLList(weatherElementType) }
  })
});

const datasetType = new GraphQLObjectType({
  name: "dataset",
  fields: () => ({
    location: { type: GraphQLList(locationType) }
  })
});

//回傳的物件被包在root中
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    records: {
      type: datasetType,
      resolve(parent, args) {
        return axios
          .get(
            "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B975CADF-A01E-4002-A614-DCED88D7BFDB"
          )
          .then(res => res.data.records);
      }
    },
    district: {
      type: locationType,
      args: {
        district: { type: GraphQLString }
      },
      resolve(parent, args) {
        console.log(args.district);
        return axios
          .get(
            `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B975CADF-A01E-4002-A614-DCED88D7BFDB&locationName=${encodeURIComponent(
              state[args.district]
            )}`
          )
          .then(res => res.data.records.location[0]);
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
