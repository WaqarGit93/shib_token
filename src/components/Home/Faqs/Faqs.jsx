import { CaretRightOutlined, DownOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import './Faqs.css';

const Faqs = () => {
    const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    // background: 'transparent',
    borderRadius: token.borderRadiusLG,
    border: '2px solid #253437',
  };
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;
    const getItems = (panelStyle) => [
        {
            key: '1',
            label: 'Lorem Ipsum is simply dummy',
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: 'Lorem Ipsum is simply dummy',
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '3',
            label: 'Lorem Ipsum is simply dummy',
            children: <p>{text}</p>,
            style: panelStyle,
        },
    ];
  return (
    <section className="max-w-[1024px] w-full mx-auto text-center pb-6 sm:pb-10 px-4 md:px-2 lg:px-0">
    <h1 className="mb-2 text-[28px] sm:text-[32px] leading-[36px] sm:leading-[42px] poppins-semibold text-center text-white mb-6 sm:mb-10">
            Frequently Asked Questions
    </h1>
    <Collapse
        bordered={false}
        // defaultActiveKey={['1']}
        expandIconPosition='end'
        expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 90 : 0} />}
        items={getItems(panelStyle)}
        />
    </section>
  );
};

export default Faqs;
