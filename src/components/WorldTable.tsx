import React from 'react';
import styled from 'styled-components';
import useDataApi from '../hooks/useDataApi';
import {mediaQuery} from '../themes';
import {IWorldTableResponse} from '../types';
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

const Table = styled.table`
  border: solid ${({theme}) => theme.colors.borderColor} 1px;
  margin: 10px;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  &:nth-child(odd) {
    background: ${({theme}) => theme.colors.backgroundLight}
  } 
`;

const Td = styled.td`
  border: solid ${({theme}) => theme.colors.borderColor} 1px;
  line-height: 1rem;
  padding: 0.5rem;
`;

const Thd = styled.td`
  border: solid ${({theme}) => theme.colors.borderColor} 1px;
  line-height: 1rem;
  padding: 0.5rem;
  font-weight: 700;
`;

const Wrapper = styled.div`
  height: 400px;
  overflow: auto;
`;

interface IWorldTableProps {
  url: string;
  title?: string;
}

interface IWordTableBodyProps {
  data: IWorldTableResponse[];
}

// @ts-ignore
const WordTableBody: React.FC<IWordTableBodyProps> = ({data}) => {
  if (data && data.length !== undefined && data.length > 0) {
    return data.map(item => {
      return (
        <Tr key={item.country_name}>
          <Td>{item.id}</Td>
          <Td>{item.country_name}</Td>
          <Td>{item.confirmed_cases}</Td>
          <Td>{item.cases_per_1_million_people}</Td>
          <Td>{item.recovered}</Td>
          <Td>{item.deaths}</Td>
        </Tr>
      )
    })
  } else {
    return <tr><td colSpan={5}>NO DATA</td></tr>;
  }
};

const WorldTable: React.FC<IWorldTableProps> = ({url, title}) => {
  const [{data, isLoading, isError}] = useDataApi<IWorldTableResponse[]>({
    initUrl: url,
    defaultData: {},
  });

  if (isLoading) {
    return <Loading speed={300}/>;
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
          <Row>
            {(data) && (
              <Wrapper>
                <Table>
                  <thead>
                  <tr>
                    <Thd/>
                    <Thd>Country name</Thd>
                    <Thd>Confirmed cases</Thd>
                    <Thd>Cases per 1 M people</Thd>
                    <Thd>Recovered</Thd>
                    <Thd>Deaths</Thd>
                  </tr>
                  </thead>
                  <tbody>
                    <WordTableBody data={data}/>
                  </tbody>
                </Table>
              </Wrapper>
            )}
          </Row>
        </>
      )}
    </StatSection>
  );
};

export default WorldTable;
