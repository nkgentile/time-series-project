<template>
  <svg v-bind="{ viewBox }" xmlns="http://www.w3.org/2000/svg">
    <path
      :d="actualPath"
      fill="none"
      stroke="green"
      stroke-width=".5"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      :d="movingAverageSmallPath"
      fill="none"
      stroke="blue"
      stroke-width=".5"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      :d="movingAverageMediumPath"
      fill="none"
      stroke="yellow"
      stroke-width=".5"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      :d="movingAverageLargePath"
      fill="none"
      stroke="red"
      stroke-width=".5"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
  import { prop, takeLast } from "ramda";

  import { extent, min, max } from "d3-array";
  import { scaleLinear, scaleTime } from "d3-scale";
  import { area, curveStep, line } from "d3-shape";

  import { timeParse } from "d3-time-format";
  const parseDate = timeParse("%Y-%m-%d");

  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
      width: {
        type: Number,
        default: 600
      },
      height: {
        type: Number,
        default: 300
      }
    },
    computed: {
      /* CONTEXT */
      viewBox() {
        const { width, height } = this;
        return `0 0 ${width} ${height}`;
      },

      /* SCALES */
      x() {
        const { data, width } = this;

        const timeExtent = extent(data, ({ timestamp }) => parseDate(timestamp));

        return scaleTime()
          .domain(timeExtent)
          .range([0, width]);
      },

      y() {
        const { height, data } = this;
        const actualExtent = extent(data, datum => datum.movingAverage.small);

        console.log(actualExtent);

        return scaleLinear()
          .domain(actualExtent)
          .nice(5)
          .range([height, 0]);
      },

      /* SHAPES */
      actualPath() {
        const { data, x, y } = this;
        return line()
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y(({ actual }) => y(actual))(data);
      },

      movingAverageSmallPath() {
        const { data, x, y } = this;
        return line()
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y(({ movingAverage }) => y(movingAverage.small))(data);
      },

      movingAverageMediumPath() {
        const { data, x, y } = this;
        return line()
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y(({ movingAverage }) => y(movingAverage.medium))(data);
      },

      movingAverageLargePath() {
        const { data, x, y } = this;
        return line()
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y(({ movingAverage }) => y(movingAverage.large))(data);
      }
    }
  };
</script>
