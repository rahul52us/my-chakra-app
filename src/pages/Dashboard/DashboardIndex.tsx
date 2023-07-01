import { Box, Grid, GridItem } from "@chakra-ui/react";
import ExampleTable from "../../config/component/DashTable/DashTable";
import DashboardBanner from "./component/DashboardBanner";
import DashWidgetCard from "./component/DashWidgetCard";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { omit } from "lodash";
import store from "../../store/store";
import moment from "moment";
import QuizMessages from "../../config/constant/messages";
import DeleteModel from "../../config/component/common/DeleteModel";
import { deleteCategoryFunction } from "./quiz/component/category/utils/function";

const removeKeys: (keyof Category)[] = [
  "description",
  "userId",
  "updatedAt",
  "__v",
  "_id"
];

interface Category {
  _id: string;
  title: string;
  createdAt: string;
  description?: string;
  userId?: string;
  updatedAt?: string;
  __v?: string;
  topics: any
}

const DashboardIndex = observer(() => {
  const [fetchCategoryLoading, setFetchCategoryLoading] = useState(true);
  const {
    quiz: { categories, setDeleteCategoryModal  },
  } = store;

  const fetchCategories = async () => {
    try {
      await store.quiz.getCategories();
    } catch (err: any) {
      store.auth.openNotification({
        message: err.message,
        title: QuizMessages.error.category.get,
        type: "error",
      });
    } finally {
      setFetchCategoryLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const transformedData: Category[] = categories
    .slice(0, 5)
    .map((item: Category, index: number) => ({
      sno: index + 1,
      ...omit(item, removeKeys),
      action: item._id,
      createdAt: item.createdAt && moment(item.createdAt).format("DD-MM-YYYY"),
      title: `${item.title?.substring(0, 12)}...`,
      topics:item.topics?.length
    }));

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
            <ExampleTable
              headers={headers}
              rowData={transformedData}
              loading={fetchCategoryLoading}
              deleteAction={setDeleteCategoryModal}
            />
          </GridItem>
          <GridItem>
            <ExampleTable
              headers={headers}
              rowData={transformedData}
              loading={fetchCategoryLoading}
              deleteAction={setDeleteCategoryModal}
            />
          </GridItem>
        </Grid>
      </Box>
      <DeleteModel
        id={store.quiz.openDeleteCategoryModal?.data?._id}
        open={store.quiz.openDeleteCategoryModal?.open}
        close={setDeleteCategoryModal}
        title={store.quiz.openDeleteCategoryModal?.data?.title}
        content="Are you sure , you want to delete this category"
        submit={deleteCategoryFunction}
      />
    </>
  );
});

export default DashboardIndex;
