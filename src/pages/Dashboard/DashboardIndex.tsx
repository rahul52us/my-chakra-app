import { Box, Grid, GridItem } from "@chakra-ui/react";
import ExampleTable from "../../config/component/DashTable/DashTable";
import DashboardBanner from "./component/DashboardBanner";
import DashWidgetCard from "./component/DashWidgetCard";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { omit } from "lodash";
import store from "../../store/store";

const removeKeys: (keyof Category)[] = [
  "description",
  "userId",
  "updatedAt",
  "__v",
  "_id",
];

interface Category {
  _id: string;
  title: string;
  createdAt: string;
  description?: string;
  userId?: string;
  updatedAt?: string;
  __v?: string;
}

const fetchCategories = async () => {
  try {
    await store.quiz.getCategories();
  } catch (err: any) {
    store.auth.openNotification({
      message: err.message,
      title: "Get Quiz Categories Failed",
      type: "error",
    });
  }
};

const DashboardIndex = observer(() => {
  const { quiz } = store;
  const { categories } = quiz;

  useEffect(() => {
    fetchCategories();
  }, []);

  const transformedData: Category[] = categories.map(
    (item: Category, index: number) => ({
      sno: index + 1,
      ...omit(item, removeKeys),
      action: item._id,
    })
  );

  const headers =
    transformedData.length > 0 ? Object.keys(transformedData[0]) : [];

  return (
    <>
      <DashboardBanner />
      <DashWidgetCard />
      <Box mt={5}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2,1fr)" }}
          gap={4}
        >
          <GridItem>
            <ExampleTable headers={headers} rowData={transformedData} />
          </GridItem>
          <GridItem>
            <ExampleTable headers={headers} rowData={transformedData} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
});

export default DashboardIndex;
