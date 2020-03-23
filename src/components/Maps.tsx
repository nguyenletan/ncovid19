import {ResponsiveChoropleth} from '@nivo/geo';
import * as React from 'react';
import styled from 'styled-components';
import useDataApi from '../hooks/useDataApi';
import {mediaQuery} from '../themes';
import {ITimeSeriesConfirmed, IWorldResponse} from "../types";
import {covertToMapsData} from '../utils';
import countries from '../world_countries.js';
import Error from './Error';
import Loading from "./Loading";
import Row from './Row';


const StatSection = styled.section`
  display: block;
`;

const StatHeading = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
`;

const StatTitle = styled.h3`
  color: inherit;
  margin-bottom: 0.2rem;
  ${mediaQuery.tablet} {
    font-size: 1.3em;
  }
`;


const MapsSection = styled.div`
  margin-top: 1rem;
  height: 400px;
`;

interface MapsProps {
  url: string;
  title?: string;
}

const Maps: React.FC<MapsProps> = ({url, title}) => {
  const [{data, isLoading, isError}] = useDataApi<IWorldResponse[]>({
    initUrl: url,
    defaultData: {},
  });
  if (isLoading) {
    return <Loading speed={300}/>;
  }

  let timeSeriesConfirmed: ITimeSeriesConfirmed[] = [];
  if (data && data.length !== undefined && data.length > 0) {
    timeSeriesConfirmed = covertToMapsData(data);
  }
  return (
    <StatSection className="center-text">
      {isError ? (
        <Row>
          <Error message="No Data Available"/>
        </Row>
      ) : (
        <>
          <StatHeading>
            {title && <StatTitle>{title}</StatTitle>}
          </StatHeading>
          <MapsSection>
            {(timeSeriesConfirmed.length > 0) && (<ResponsiveChoropleth
              data={timeSeriesConfirmed}
              features={countries.features}
              colors="reds"
              domain={[0, 85000]}
              unknownColor="#ffffff"
              label="properties.name"
              projectionTranslation={[0.5, 0.5]}
              enableGraticule={true}
              graticuleLineColor="#dddddd"
              borderWidth={0.5}
              borderColor="#152538"
              projectionRotation={[0, 0, 0]}
            />)}
          </MapsSection>
        </>
      )}
    </StatSection>
  );
};

export default Maps;
