import React from 'react';

import Layout from '../components/layout';

const Maker = (props) => {
  const { pageContext } = props;
  const { sculpt } = pageContext;
  const { maker } = pageContext;

  console.log(pageContext);

  return (
    <Layout>
      <h2 className="text-3xl mb-3">
        {maker.name} / <span className="font-bold">{sculpt.name}</span>
      </h2>
      <ul className="flex flex-row flex-wrap w-full md:-mx-2">
        {sculpt.colorways.map((c) => (
          <li key={c.id} className="md:w-1/4 lg:w-1/6 py-3 md:px-2">
            <img className="block max-w-full" src={c.img} />
            {c.name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Maker;
