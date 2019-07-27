<template>
  <svg v-bind="{ viewBox }" xmlns="http://www.w3.org/2000/svg">
    <path :d="area" fill="rgba(0, 0, 255, 0.15)" />
    <path
      :d="openLine"
      fill="none"
      stroke="steelblue"
      stroke-width=".5"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      :d="closeLine"
      fill="none"
      stroke="blue"
      stroke-width=".5"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      :d="adjustedCloseLine"
      fill="none"
      stroke="green"
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

  import qqq from "@/assets/json/qqq.json";
  import { close } from "fs";

  export default {
    name: "dashboard",
    data: () => ({
      width: 600,
      height: 300,
      qqq: takeLast(365, qqq)
      // qqq
    }),
    computed: {
      /* CONTEXT */
      viewBox() {
        const { width, height } = this;
        return `0 0 ${width} ${height}`;
      },

      /* SCALES */
      x() {
        const { qqq, width } = this;

        const timeExtent = extent(qqq, ({ timestamp }) => parseDate(timestamp));

        return scaleTime()
          .domain(timeExtent)
          .range([0, width]);
      },

      y() {
        const { height, qqq } = this;
        const minimum = min(qqq, prop("low"));
        const maximum = max(qqq, prop("high"));

        return scaleLinear()
          .domain([minimum, maximum])
          .nice(5)
          .range([height, 0]);
      },

      yOpen() {
        const { height, qqq } = this;
        const openExtent = extent(qqq, prop("open"));

        return scaleLinear()
          .domain(openExtent)
          .nice(5)
          .range([height, 0]);
      },

      yClose() {
        const { height, qqq } = this;
        const closeExtent = extent(qqq, prop("close"));

        return scaleLinear()
          .domain(closeExtent)
          .nice(5)
          .range([height, 0]);
      },

      yAdjustedClose() {
        const { height, qqq } = this;
        const adjustedCloseExtent = extent(qqq, prop("adjusted_close"));

        return scaleLinear()
          .domain(adjustedCloseExtent)
          .nice(5)
          .range([height, 0]);
      },

      /* SHAPES */
      area() {
        const { qqq, x, y } = this;
        return area()
          .curve(curveStep)
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y0(({ low }) => y(low))
          .y1(({ high }) => y(high))(qqq);
      },

      openLine() {
        const { qqq, x, yOpen } = this;
        return line()
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y(({ open }) => yOpen(open))(qqq);
      },

      closeLine() {
        const { qqq, x, yClose } = this;
        return line()
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y(({ close }) => yClose(close))(qqq);
      },

      adjustedCloseLine() {
        const { qqq, x, yAdjustedClose } = this;
        return line()
          .x(({ timestamp }) => x(parseDate(timestamp)))
          .y(({ adjusted_close }) => yAdjustedClose(adjusted_close))(qqq);
      }
    }
  };
</script>
