<template lang="pug">
.calendar
  .calendar__header
    button.calendar__btn(@click.prevent="prevMonth")
      Arrow.calendar__btn-arrow.calendar__btn-arrow--left
    span.calendar__date {{ getMonth }}
    span.calendar__date(v-if="visibleYear") {{ $moment(currentDate).year() }}
    button.calendar__btn(@click.prevent="nextMonth")
      Arrow.calendar__btn-arrow 
  table.calendar__table
    tr.calendar__head
      th.calendar__head-item(v-for="(day, i) in nameDays", :key="i") {{ day }}
    tr(v-for="(item, i) in numberDays", :key="i")
      td.calendar__day(
        v-for="(item, i) in numberDays[i]",
        :key="i",
        :class="checkDay(item)"
      ) 
        p.calendar__day-number {{ $moment(item).get('date') }}
        .calendar__events
          ul.calendar__events-list
            li.calendar__events-item(
              :class="item.type",
              v-for="(event, i) in findEvents(item)",
              :key="i"
            )
              p.calendar__events-text(:class="event.type") {{ $moment(event.date, 'YYYY-MM-DD[T]HH:mm').format('LT') }} {{ event.title }}
</template>

<script>
import Arrow from "@/assets/img/svg/arrow.svg";

export default {
  props: {
    note: {
      type: Array,
    },
  },

  components: {
    Arrow,
  },

  data() {
    return {
      nameDays: [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
      ],
      numberDays: [[]],
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Мая",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      currentDate: null,
      today: null,
      count: 0,

      visibleYear: false,
      styleobj: {},
    };
  },

  computed: {
    getMonth() {
      this.checkYear;
      return this.months[this.$moment(this.currentDate).month()];
    },

    checkYear() {
      let now = this.$moment(this.today).year();
      return this.$moment(this.currentDate).year() !== now ? true : false;
    },
  },

  methods: {
    changebgcolor: function () {},
    checkDay(day) {
      let classes = [];

      if (
        this.$moment(this.today).isAfter(day) &&
        !this.$moment(this.today).isSame(day)
      ) {
        classes.push("last");
      }

      if (this.$moment(this.today).isSame(day)) {
        classes.push("today");
      }

      day = this.$moment(day, "YYYY-MM-DD").format("dddd");

      if (day == "суббота" || day == "воскресенье") {
        classes.push("weekend");
      }

      return classes;
    },

    findEvents(day) {
      return this.note.filter((item) => {
        return (
          this.$moment(item.date, "YYYY.MM.DD").format("YYYY-MM-DD") === day
        );
      });
    },

    prevMonth() {
      this.currentDate = this.$moment(this.currentDate).subtract(1, "month");

      let currentYear = this.$moment(this.currentDate).year();
      let year = this.$moment(this.today).year();

      if (!this.$moment(year).isSame(currentYear)) {
        this.visibleYear = true;
      }

      this.clearNumberDays();
      this.createCalendar(this.currentDate);
    },

    nextMonth() {
      this.currentDate = this.$moment(this.currentDate).add(1, "month");

      let currentYear = this.$moment(this.currentDate).year();
      let year = this.$moment(this.today).year();

      if (!this.$moment(year).isSame(currentYear)) {
        this.visibleYear = true;
      }

      this.clearNumberDays();
      this.createCalendar(this.currentDate);
    },

    getDay(date) {
      let day = this.$moment(date).day();
      if (day == 0) day = 7;
      return day - 1;
    },

    createCalendar(date) {
      let mon = this.$moment(date, "YYYY-MM-DD").month();
      let d = this.$moment(date).startOf("month"),
        nextD = this.$moment(d).endOf("month"),
        prevD = d;

      for (let i = 0; i < this.getDay(d); i++) {
        prevD = this.$moment(prevD, "YYYY-MM-DD")
          .subtract(1, "days")
          .format("YYYY-MM-DD");
        this.numberDays[0].unshift(prevD);
      }

      while (this.$moment(d).month() == mon) {
        if (this.numberDays[this.count].length === 7) {
          this.addWeek();
        }
        this.numberDays[this.count].push(this.$moment(d).format("YYYY-MM-DD"));

        d = this.$moment(d).add(1, "day").format("YYYY-MM-DD");
      }

      if (this.getDay(d) != 0) {
        let weekArray = this.numberDays[this.count];

        for (let i = this.getDay(d); i < 7; i++) {
          if (weekArray.length === 7) {
            this.addWeek();
          }

          nextD = this.$moment(nextD).add(1, "day").format("YYYY-MM-DD");
          weekArray.push(nextD);
        }
      }
    },

    addWeek(arg = []) {
      this.numberDays.push(arg);
      this.count++;
    },

    clearNumberDays() {
      this.numberDays = [[]];
      this.count = 0;
    },
  },

  mounted() {
    this.today = this.$moment().format("YYYY-MM-DD");
    this.currentDate = this.today;
    this.createCalendar(this.today);
  },
};
</script>

