import { Container, Typography, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { fetchLoading } from '../../actions/general/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, CardHeader, IconButton, MenuItem, Menu, CircularProgress } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import CardContent from '@material-ui/core/CardContent';
import CustomLineChart from '../../components/charts/LineChart';
import CustomAreaChart from '../../components/charts/AreaChart';
import CustomBarChart from '../../components/charts/BarChart';
import { findCasosAcumulados } from '../../actions/covid/actions';

const INITIAL_STATE = {
  anchorElLineChart: null,
  filterOptionLineChart: 'dias',
  loadingLineChart: false,
  anchorElBarChart: null,
  filterOptionBarChart: 'dias',
  loadingBarChart: false,
  anchorElAreaChart: null,
  filterOptionAreaChart: 'dias',
  loadingAreaChart: false,
  dataLineChart: [],
  dataBarChart: [],
  dataAreaChart: [],
  headersCasos: [
    { title: 'Casos aculumados', color: '#2eb067', id: 'cs', key: 'casos' },
  ],
  headersObitos: [
    { title: 'Óbitos acumulados', color: '#a74747', id: 'ob', key: 'obitos' },
  ]

}


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  async componentDidMount() {
    this.props.fetchLoading(true);
    let data = await this.findCasos();
    let casos = data[this.state.filterOptionLineChart].map((it) => { return { name: it._id, casos: it.casosAcumulado } })
    let obitos = data[this.state.filterOptionLineChart].map((it) => { return { name: it._id, obitos: it.obitosAcumulado } })
    this.setState({ dataLineChart: casos, dataBarChart: casos, dataAreaChart: obitos });
    this.props.fetchLoading(false);
  }

  async findCasos() {
    return await findCasosAcumulados();
  }

  handleClickLineChart = (event) => {
    this.setState({ anchorElLineChart: event.currentTarget });
  }

  handleCloseLineChart = async (event) => {
    this.setState({ anchorElLineChart: null });
    if (event.target.id) {
      this.setState({ filterOptionLineChart: event.target.id, loadingLineChart: true });
      let data = await this.findCasos();
      let casos = data[this.state.filterOptionLineChart].map((it) => { return { name: it._id, casos: it.casosAcumulado } })
      this.setState({ loadingLineChart: false, dataLineChart: casos });
    }
  }

  handleClickBarChart = (event) => {
    this.setState({ anchorElBarChart: event.currentTarget });
  }

  handleCloseBarChart = async (event) => {
    this.setState({ anchorElBarChart: null });
    if (event.target.id) {
      this.setState({ filterOptionBarChart: event.target.id, loadingBarChart: true });
      let data = await this.findCasos();
      let casos = data[this.state.filterOptionBarChart].map((it) => { return { name: it._id, casos: it.casosAcumulado } })
      this.setState({ loadingBarChart: false, dataBarChart: casos });
    }
  }

  handleClickAreaChart = (event) => {
    this.setState({ anchorElAreaChart: event.currentTarget });
  }

  handleCloseAreaChart = async (event) => {
    this.setState({ anchorElAreaChart: null });
    if (event.target.id) {
      this.setState({ filterOptionAreaChart: event.target.id, loadingAreaChart: true });
      let data = await this.findCasos();
      let obitos = data[this.state.filterOptionAreaChart].map((it) => { return { name: it._id, obitos: it.obitosAcumulado } })
      this.setState({ loadingAreaChart: false, dataAreaChart: obitos });
    }
  }



  showLineChart = () => {

    return <Grid item={true} xs={12} sm={12} md={6}>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={this.handleClickLineChart}>
              <FilterListIcon />
            </IconButton>
          }
          title={`HISTÓRICO DE CASOS DE COVID (${this.state.filterOptionLineChart === 'dias' ? 'DIÁRIO' : 'SEMANAL'})`}
          disableTypography={true}
          style={{ color: '#606060', fontSize: 16, fontWeight: 'bold' }}
        />
        <CardContent>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorElLineChart}
            keepMounted
            open={Boolean(this.state.anchorElLineChart)}
            onClose={this.handleCloseLineChart}
          >
            <MenuItem style={{ fontSize: 15 }} id="dias" disabled={this.state.filterOptionLineChart === 'dias'} onClick={this.handleCloseLineChart}>Diário</MenuItem>
            <MenuItem style={{ fontSize: 15 }} id="semana" disabled={this.state.filterOptionLineChart === 'semana'} onClick={this.handleCloseLineChart}>Semanal</MenuItem>
          </Menu>
          {
            this.state.loadingLineChart ?
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{ height: '300px' }}
              >
                <CircularProgress color="primary" />
              </Grid>
              :
              <CustomLineChart data={this.state.dataLineChart} headers={this.state.headersCasos} />
          }
        </CardContent>
      </Card>
    </Grid>
  }

  showBarChart = () => {

    return <Grid item={true} xs={12} sm={12} md={6}>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={this.handleClickBarChart}>
              <FilterListIcon />
            </IconButton>
          }
          title={`HISTÓRICO DE CASOS DE COVID (${this.state.filterOptionBarChart === 'dias' ? 'DIÁRIO' : 'SEMANAL'})`}
          disableTypography={true}
          style={{ color: '#606060', fontSize: 16, fontWeight: 'bold' }}
        />
        <CardContent>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorElBarChart}
            keepMounted
            open={Boolean(this.state.anchorElBarChart)}
            onClose={this.handleCloseBarChart}
          >
            <MenuItem style={{ fontSize: 15 }} id="dias" disabled={this.state.filterOptionBarChart === 'dias'} onClick={this.handleCloseBarChart}>Diário</MenuItem>
            <MenuItem style={{ fontSize: 15 }} id="semana" disabled={this.state.filterOptionBarChart === 'semana'} onClick={this.handleCloseBarChart}>Semanal</MenuItem>
          </Menu>
          {
            this.state.loadingBarChart ?
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{ height: '300px' }}
              >
                <CircularProgress color="primary" />
              </Grid>
              :
              <CustomBarChart data={this.state.dataBarChart} headers={this.state.headersCasos} />
          }
        </CardContent>
      </Card>
    </Grid>
  }

  showAreaChart = () => {

    return <Grid item={true} xs={12} sm={12} md={12}>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={this.handleClickAreaChart}>
              <FilterListIcon />
            </IconButton>
          }
          title={`HISTÓRICO DE ÓBITOS POR COVID (${this.state.filterOptionAreaChart === 'dias' ? 'DIÁRIO' : 'SEMANAL'})`}
          disableTypography={true}
          style={{ color: '#606060', fontSize: 16, fontWeight: 'bold' }}
        />
        <CardContent>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorElAreaChart}
            keepMounted
            open={Boolean(this.state.anchorElAreaChart)}
            onClose={this.handleCloseAreaChart}
          >
            <MenuItem style={{ fontSize: 15 }} id="dias" disabled={this.state.filterOptionAreaChart === 'dias'} onClick={this.handleCloseAreaChart}>Diário</MenuItem>
            <MenuItem style={{ fontSize: 15 }} id="semana" disabled={this.state.filterOptionAreaChart === 'semana'} onClick={this.handleCloseAreaChart}>Semanal</MenuItem>
          </Menu>
          {
            this.state.loadingAreaChart ?
              <Grid
                container
                alignItems="center"
                justify="center"
                style={{ height: '300px' }}
              >
                <CircularProgress color="primary" />
              </Grid>
              :
              <CustomAreaChart data={this.state.dataAreaChart} headers={this.state.headersObitos} />
          }
        </CardContent>
      </Card>
    </Grid>
  }




  render() {
    return <Container>
      <div style={{ height: '80px', width: '100%' }}></div>
      <Grid container style={{ paddingLeft: 60 }} spacing={1}>
        {this.showLineChart()}
        {this.showBarChart()}
        {this.showAreaChart()}
      </Grid>
    </Container>
  }
}


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ fetchLoading }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
