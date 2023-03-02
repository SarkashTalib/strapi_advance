'use strict';

/**
 * feature-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feature-list.feature-list');
