<template>
  <div class="toc">
    <li v-for="(item, i) in sidebarItems">
      <TocGroup
          v-if="item.type === 'group'"
          :item="item"
          :first="i === 0"
          :open="i === openGroupIndex"
          :collapsable="item.collapsable"
          @toggle="toggleGroup(i)"
        />
    </li>
  </div>
</template>

<script>
import TocGroup from './TocGroup.vue';
import TocItems from './TocItems.vue';
import { isActive, resolveSidebarItems } from './util';
export default {
  components: { TocItems, TocGroup },
  props: ['active'],
  data () {
    return {
      openGroupIndex: 0
    }
  },
  computed: {
    sidebarItems: function() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    }
  },

  created () {
    this.refreshIndex()
  },
  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },
  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.sidebarItems
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },
    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },
    isActive (page) {
      return isActive(this.$route, page.path)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>


<style scoped>
.toc {
  position: fixed;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(255,255,255,1);
  color: #2d2d2d;
  font-size: 0.9rem;
  padding: 1rem 1.4rem;
  z-index: 100;
  transition: all 400ms;
}
@media screen and (min-width: 752px) {
  .toc {
    bottom: 100px;
    right: 30px;
    top: 80px;
    width: 300px;
    border-radius: 15px;
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
  }
}
@media screen and (max-width: 751px) {
  .toc {
    top: 0;
    bottom: 0;
    min-width: 50%;
    max-width: 100%;
    right: 0;
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
  }
}

li {
  list-style: none;
}
</style>
