import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import styles from './index.less';
import DataTable from './components/DataTable';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <DataTable />
      </div>
    </PageContainer>
  );
};

export default HomePage;
