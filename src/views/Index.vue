<template lang="pug">
section.page
  Calendar(:note='note')
</template>

<script>
import Calendar from '@/components/Calendar'

export default {
  components: {
    Calendar
  },

  data() {
    return {
      note: [
        {
          id: 1,
          title: 'Купить хлеб',
          date: '2022.02.28[T]16:00',
          type: 'red'
        },
        {
          id: 2,
          title: 'Продать хлеб',
          date: '2022.02.28[T]16:10',
          type: 'green'
        },
        {
          id: 3,
          title: 'Подготовить презентацию',
          date: '2022.03.30[T]23:00',
          type: 'yellow'
        },
        {
          id: 4,
          title: 'Прочитать "Война и Мир"',
          date: '2022.03.10[T]21:00',
          type: 'green'
        },
        {
          id: 5,
          title: 'Купить билеты',
          date: '2022.03.18[T]11:00',
          type: 'red'
        },
        {
          id: 6,
          title: 'Собрать чемодан',
          date: '2022.03.20[T]18:00',
          type: 'green'
        },
        {
          id: 7,
          title: 'Закончить тестовое задание',
          date: '2022.03.21[T]03:00',
          type: 'yellow'
        },
        {
          id: 8,
          title: 'Отправить посылку',
          date: '2022.04.01[T]17:00',
          type: 'yellow'
        },
      ]
    }
  }
};
</script>
