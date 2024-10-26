// pages/index.js
import ProductivityCounter from '../components/ProductivityCounter';

const HomePage = () => {
  const counterData = [
    {
      endValue: 50,
      suffix: '%',
      icon: '⬆️', // You can replace this with any icon or emoji
      description: 'More productivity'
    },
    {
      endValue: 2,
      suffix: 'X',
      icon: '📈', // Example of a different icon
      description: 'Quicker Project Completion'
    },
    {
      endValue: 70,
      suffix: '%',
      icon: '⌛', // Another icon for this
      description: 'Less Manual Data Entry'
    }
  ];

  return (
    <div>
      <ProductivityCounter data={counterData} />
    </div>
  );
};

export default HomePage;
