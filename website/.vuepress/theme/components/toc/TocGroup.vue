<template>
  <div
    class="sidebar-group"
    :class="{ first, collapsable }"
  >
    <p
      class="sidebar-heading"
      :class="{ open }"
      @click="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span
        class="arrow"
        v-if="collapsable"
        :class="open ? 'down' : 'right'">
      </span>
    </p>

    <DropdownTransition>
      <ul
        ref="items"
        class="sidebar-group-items"
        v-if="open || !collapsable"
      >
        <li v-for="child in item.children">
          <TocItems :item="child"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import TocItems from './TocItems.vue';
import DropdownTransition from './DropdownTransition.vue';

export default {
  name: 'TocGroup',
  props: ['item', 'first', 'open', 'collapsable'],
  components: { TocItems, DropdownTransition }
}
</script>

<style scoped>
.sidebar-heading, .sidebar-heading.open {
  padding: 0;
  color: #2d2d2d;
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.sidebar-link {
  color: #444;
  font-size: 1.1em;
  line-height: 1.6em;;
}
.sidebar-link:hover {
  color: #3a8fb7;
}
.sidebar-link.active {
  border-bottom: 2px solid #77428d;
}

.sidebar-sub-header > .sidebar-link {
  font-size: 1em;
  margin-top: 0;
  margin-left: 1em;
}
.sidebar-sub-header > .sidebar-link.active {
  border-bottom: 0;
  color: #77428d;
  font-size: 1em;
  margin-top: 0;
  margin-left: 1em;
}
.sidebar-sub-header > .sidebar-link:hover {
  color: #3a8fb7;
}
</style>
